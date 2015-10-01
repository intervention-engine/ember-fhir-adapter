import DS from 'ember-data';

var MedicationStatementDosageComponent = DS.Model.extend({
    text: DS.attr('string'),
    timing: DS.belongsTo('timing', {embedded: true}),
    asNeededBoolean: DS.attr('boolean'),
    asNeededCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    siteCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    siteReference: DS.belongsTo('reference', {embedded: true}),
    route: DS.belongsTo('codeable-concept', {embedded: true}),
    method: DS.belongsTo('codeable-concept', {embedded: true}),
    quantitySimpleQuantity: DS.belongsTo('quantity', {embedded: true}),
    quantityRange: DS.belongsTo('range', {embedded: true}),
    rateRatio: DS.belongsTo('ratio', {embedded: true}),
    rateRange: DS.belongsTo('range', {embedded: true}),
    maxDosePerPeriod: DS.belongsTo('ratio', {embedded: true})
});
export default MedicationStatementDosageComponent;
