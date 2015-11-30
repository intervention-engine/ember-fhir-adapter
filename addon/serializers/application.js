import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  isNewSerializerAPI: true,

  serialize: function(snapshot, options){
    let hash = this._super(snapshot, options);
    hash.resourceType = snapshot.typeKey.camelize().capitalize();

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
      resourceArray = payload;
    }
    else{
      resourceArray = payload.entry.mapBy('resource');
    }
    let hash = {};
    hash[Ember.String.pluralize(primaryModelClass.modelName)] = resourceArray;
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
      // var included = _serializer$normalize.included;
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
      if (relationshipHash.id) {
        relationshipHash.id = coerceId(relationshipHash.id);
      }
      return relationshipHash;
    }
    return { id: this.extractID(relationshipHash), type: relationshipModelName };
  }
});
