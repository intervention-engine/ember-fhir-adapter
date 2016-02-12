import Ember from 'ember';
import DS from 'ember-data';


export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  serialize: function(snapshot, options){
    let hash = this._super(snapshot, options);
    hash.resourceType = snapshot.modelName.camelize().capitalize();
    return hash;

  },

  serializeIntoHash: function (hash, typeClass, snapshot, options){
    Ember.merge( hash, this.serialize(snapshot, options));
  },

  extractId: function(modelClass, resourceHash){
    return resourceHash.id || Ember.generateGuid({},modelClass.modelName);
  },
  normalizeResponse: function(store, primaryModelClass, payload, id, requestType)  {
    let resourceArray = null;
    if(!payload.entry){
      resourceArray = [payload];
    }
    else{
      resourceArray = payload.entry.mapBy('resource');
    }
    let hash = {};
    //hash[Ember.String.pluralize(primaryModelClass.modelName)] = resourceArray;
    // payload entries may have different resource types, hash them individually
    for (var i = 0; i < resourceArray.length; i++) {
      var type = resourceArray[i].resourceType.dasherize().pluralize();
      if (hash[type] === undefined) {
        hash[type] = [];
      }
      hash[type].push(resourceArray[i]);
    }
    let results = this._super(store, primaryModelClass, hash, id, requestType);
    return results;
  },

  normalizeArray: function(store, modelName, arrayHash, prop){
    var documentHash = {
      data: [],
      included: []
    };

    /*jshint loopfunc:true*/
    arrayHash.map(function(hash){
      let modelClass = store.modelFor(hash.resourceType);
      let serializer = store.serializerFor(hash.resourceType);
      var _serializer$normalize = serializer.normalize(modelClass, hash, prop);

      var data = _serializer$normalize.data;
      documentHash.included = documentHash.included.concat(_serializer$normalize.included);
      documentHash.data.push(data);
    });
    return documentHash;
  },

  extractRelationship: function (relationshipModelName, relationshipHash) {
    if (Ember.isNone(relationshipHash)) {
      return null;
    }
    /*
      When `relationshipHash` is an object it usually means that the relationship
      is polymorphic. It could however also be embedded resources that the
      EmbeddedRecordsMixin has be able to process.
    */
    if (Ember.typeOf(relationshipHash) === "object") {
      if (!relationshipHash.id) {
        relationshipHash.id = Ember.generateGuid({},relationshipModelName);
      }
      return relationshipHash;
    }
    return { id: this.extractId(relationshipHash), type: relationshipModelName };
  }
});
