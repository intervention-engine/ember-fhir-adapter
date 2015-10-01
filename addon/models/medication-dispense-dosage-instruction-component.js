import DS from 'ember-data';

var MedicationDispenseDosageInstructionComponent = DS.Model.extend({
    text: DS.attr('string'),
    additionalInstructions: DS.belongsTo('codeable-concept', {embedded: true}),
    timing: DS.belongsTo('timing', {embedded: true}),
    asNeededBoolean: DS.attr('boolean'),
    asNeededCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    siteCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    siteReference: DS.belongsTo('reference', {embedded: true}),
    route: DS.belongsTo('codeable-concept', {embedded: true}),
    method: DS.belongsTo('codeable-concept', {embedded: true}),
    doseRange: DS.belongsTo('range', {embedded: true}),
    doseSimpleQuantity: DS.belongsTo('quantity', {embedded: true}),
    rateRatio: DS.belongsTo('ratio', {embedded: true}),
    rateRange: DS.belongsTo('range', {embedded: true}),
    maxDosePerPeriod: DS.belongsTo('ratio', {embedded: true})
});
export default MedicationDispenseDosageInstructionComponent;
