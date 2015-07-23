import DS from 'ember-data';

var RiskAssessmentPredictionComponent = DS.Model.extend({
    outcome: DS.belongsTo('codeable-concept', {embedded: true}),
    probabilityDecimal: DS.attr('number'),
    probabilityRange: DS.belongsTo('range', {embedded: true}),
    probabilityCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    relativeRisk: DS.attr('number'),
    whenPeriod: DS.belongsTo('period', {embedded: true}),
    whenRange: DS.belongsTo('range', {embedded: true}),
    rationale: DS.attr('string')
});
export default RiskAssessmentPredictionComponent;
