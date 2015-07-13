import Ember from 'ember';
import DS from 'ember-data';
var CarePlan;

CarePlan = DS.Model.extend({
  identifier: DS.hasMany('identifier', {embedded: 'always'}),
  patient: DS.belongsTo('reference', {embedded: 'always'}),
  status: DS.attr('string'),
  period: DS.belongsTo('period', {embedded: 'always'}),
  author: DS.belongsTo('reference', {embedded: 'always'}), // Patient, Practitioner, RelatedPerson, or Organization
  modified: DS.attr('date'),
  category: DS.hasMany('codeable-concept', {embedded: 'always'}),
  concern: DS.hasMany('reference', {embedded: 'always'}), // Condition
  support: DS.hasMany('reference', {embedded: 'always'}), // Any type
  participant: DS.hasMany('care-plan-participant', {embedded: 'always'}),
  goal: DS.hasMany('reference', {embedded: 'always'}), // Goal
  notes: DS.attr("string")
});

export default CarePlan;
