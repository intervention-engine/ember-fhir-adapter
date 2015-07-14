import Ember from 'ember';
import DS from 'ember-data';
var Goal;

Goal = DS.Model.extend({
    identifier: DS.hasMany('identifier', {embedded: 'always'}),
    patient: DS.belongsTo('reference', {embedded: 'always'}),
    targetDate: DS.attr('date'),
    description: DS.attr('string'),
    status: DS.attr('string'), //code
    statusDate: DS.attr('date'),
    author: DS.belongsTo('reference', {embedded: 'always'}), // Condition | Observation | MedicationStatement | NutritionOrder | ProcedureRequest | RiskAssessment
    notes: DS.attr('string'),
    outcome: DS.hasMany('goal-outcome', {embedded: 'always'})    
});

export default Goal;
