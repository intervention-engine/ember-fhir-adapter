import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONSerializer.extend(DS.EmbeddedRecordsMixin, {

  serializeIntoHash: function(hash, type, record, options){
    Ember.merge(hash, this.serialize(record, options));
  },

  keyForAttribute: function(key, relationship){
    return Ember.String.capitalize(key);
  },

  extract: function(store, type, payload, id, requestType){
    if (payload == null) {
      return [];
    }

    if (payload.resourceType == "Bundle") {
      // If this is DSTU1 you can use content in place of resource
      payload = payload.entry.mapBy("resource") || [];
    }

    payload.id = payload.id || id || Ember.generateGuid({}, type.typeKey);
    return this._super(store, type, payload, id, requestType)
  },

  normalize: function(type, hash, prop){
    hash.id = hash.id || Ember.generateGuid({}, type.typeKey);
    return this._super(type, hash, prop);

  }
})
