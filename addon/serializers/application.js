import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({DS.EmbeddedRecordsMixin,
  serializeIntoHash: function(hash, type, record, options){
    Ember.merge(hash, this.serialize(record, options));
  }

  keyForAttribute: function(key, relationship){
    return Ember.String.capitalize(key);
  }

  extract: function(store, type, payload, id, requestType){
    if (payload == null) {
      return [];
    }

    if (payload.resourceType == "Bundle") {
      payload = payload.entry || [];
    }

    payload.id = payload.id || id || Ember.generateGuid({}, type,typeKey);
    this._super(store, type, payload, id, requestType);
  }

  normalize: function(type, hash, prop){
    if (hash.content) {
      hash.content.id = || hash.content.id || hash.Identifier || Ember.generateGuid({}, type.typeKey);
      this._super(type, hash.content, prop);
    }
    else
      hash.id = hash.id || hash.Identifier || Ember.generateGuid({}, type.typeKey);
      this._super(type, hash, prop);
  }
})
