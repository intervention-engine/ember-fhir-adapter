import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {

  serialize: function(snapshot, options){
    let hash = this._super(snapshot, options);
    for(var key in hash){
      hash[key.camelize()] = hash[key];
    delete hash[key];
    }
    hash.resourceType = snapshot.typeKey.capitalize();

    return hash;

  },

  hasEmbeddedOption: function(type, attr){
    var meta = type.metaForProperty(attr);
    return meta && meta.options.embedded;
  },

  hasSearchByOption: function(type, attr){
    var meta = type.metaForProperty(attr);
    return meta && meta.options.searchBy;
  },

  serializeIntoHash: function(hash, type, record, options){
    Ember.merge(hash, this.serialize(record, options));
  },

  keyForAttribute: function(key){
    return Ember.String.capitalize(key);
  },

  normalize: function(typeClass, hash){
    hash.id = hash.id || Ember.generateGuid({}, typeClass.typeKey);
    // var normalizedHash = this._super(typeClass, hash, prop);
    hash = buildLinksHash(this, this.store, typeClass, hash);
    return extractEmbeddedRecords(this, this.store, typeClass, hash);
  },

  extract: function(store, type, payload, id, requestType){
    if (payload == null) {
      return [];
    }

    if (payload.resourceType === "Bundle" && payload.total > 0) {
      // If this is DSTU1 you can use content in place of resource

      payload = payload.entry.mapBy("resource") || [];
    }

    payload.id = payload.id || id || Ember.generateGuid({}, type.typeKey);
    return this._super(store, type, payload, id, requestType);
  }
});

function buildLinksHash(serializer, store, typeClass, hash){
  var adapter = store.adapterFor(serializer);
  hash.links = hash.links || {};
  typeClass.eachRelationship(function(key){
    if(serializer.hasSearchByOption(typeClass, key)){
      var searchBy = typeClass.metaForProperty(key).options.searchBy;
      var query = {};
      query[searchBy] = hash.id;
      hash.links[key] = adapter.buildURL(key, null, null, 'fhirQuery', query);
    }
  });
  return hash;
}

// chooses a relationship kind to branch which function is used to update payload
// does not change payload if attr is not embedded
function extractEmbeddedRecords(serializer, store, typeClass, partial) {

  typeClass.eachRelationship(function(key, relationship) {
    if (serializer.hasDeserializeRecordsOption(key) || serializer.hasEmbeddedOption(typeClass, key)) {
      var embeddedTypeClass = store.modelFor(relationship.type);
      if (relationship.kind === "hasMany") {
        extractEmbeddedHasMany(store, key, embeddedTypeClass, partial);
      }
      if (relationship.kind === "belongsTo") {
        extractEmbeddedBelongsTo(store, key, embeddedTypeClass, partial);
      }
    }
  });

  return partial;
}

// handles embedding for `hasMany` relationship
function extractEmbeddedHasMany(store, key, embeddedTypeClass, hash) {
  if (!hash[key]) {
    return hash;
  }

  var ids = [];

  var embeddedSerializer = store.serializerFor(embeddedTypeClass.typeKey);
  hash[key].forEach(function(data) {
    var embeddedRecord = embeddedSerializer.normalize(embeddedTypeClass, data, null);
    store.push(embeddedTypeClass.typeKey, embeddedRecord);
    ids.push(embeddedRecord.id);
  });

  hash[key] = ids;
  return hash;
}


function extractEmbeddedBelongsTo(store, key, embeddedTypeClass, hash) {
  if (!hash[key]) {
    return hash;
  }

  var embeddedSerializer = store.serializerFor(embeddedTypeClass.typeKey);
  var embeddedRecord = embeddedSerializer.normalize(embeddedTypeClass, hash[key], null);
  store.push(embeddedTypeClass.typeKey, embeddedRecord);

  hash[key] = embeddedRecord.id;
  //TODO Need to add a reference to the parent later so relationship works between both `belongsTo` records
  return hash;
}
