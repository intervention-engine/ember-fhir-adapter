import Ember from 'ember';
import DS from 'ember-data'
export default DS.RESTAdapter.extend({
  defaultSerializer: '-fhir'

  pathForType: function(type){
    return Ember.String.capitalize(type)
  }
})
