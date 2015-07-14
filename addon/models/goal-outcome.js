import Ember from 'ember';
import DS from 'ember-data';
var GoalOutcome;

GoalOutcome = DS.Model.extend({
    resultCodeableConcept: DS.belongsTo('codeable-concept', {embedded: 'always'}),
    resultReference: DS.belongsTo('reference', {embedded: 'always'}) // Observation
});

export default GoalOutcome
