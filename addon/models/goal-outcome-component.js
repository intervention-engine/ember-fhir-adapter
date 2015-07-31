import DS from 'ember-data';

var GoalOutcomeComponent = DS.Model.extend({
    resultCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    resultReference: DS.belongsTo('reference', {embedded: true})
});
export default GoalOutcomeComponent;
