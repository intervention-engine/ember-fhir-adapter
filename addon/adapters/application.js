import Ember from 'ember';
import DS from 'ember-data';
export default DS.RESTAdapter.extend({
  defaultSerializer: '-fhir',

  pathForType: function(type){
    return Ember.String.capitalize(Ember.String.camelize(type));
  },

  createRecord: function (store, type, snapshot) {
    if (snapshot.id) {
      // if we have set an ID on this record, use "update" instead of "create"
      // (triggers a PUT instead of POST)
      return this.updateRecord(store, type, snapshot);
    }
    return this._super(store, type, snapshot);
  },

  buildURL: function(modelName, id, snapshot, requestType, query) {
    if(requestType === "fhirQuery"){
      return this.urlForFHIRQuery(query, modelName);
    }
    return this._super(modelName, id, snapshot, requestType, query);
  },

  urlForFHIRQuery: function(query, modelName){
    var queryString = Object.keys(query).map(function(key){
        return key+"="+query[key];
    }).join("&");
    return "/" + Ember.String.singularize(this.pathForType(modelName)) + "?" + queryString;
  }
});
