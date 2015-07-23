import DS from 'ember-data';

var MedicationDispenseDosageInstructionComponent = DS.Model.extend({
    text: DS.attr('string'),
    additionalInstructions: DS.belongsTo('codeable-concept', {embedded: true}),
    scheduleDateTime: DS.attr('date'),
    schedulePeriod: DS.belongsTo('period', {embedded: true}),
    scheduleTiming: DS.belongsTo('timing', {embedded: true}),
    asNeededBoolean: DS.attr('boolean'),
    asNeededCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    site: DS.belongsTo('codeable-concept', {embedded: true}),
    route: DS.belongsTo('codeable-concept', {embedded: true}),
    method: DS.belongsTo('codeable-concept', {embedded: true}),
    doseRange: DS.belongsTo('range', {embedded: true}),
    doseQuantity: DS.belongsTo('quantity', {embedded: true}),
    rate: DS.belongsTo('ratio', {embedded: true}),
    maxDosePerPeriod: DS.belongsTo('ratio', {embedded: true})
});
export default MedicationDispenseDosageInstructionComponent;
