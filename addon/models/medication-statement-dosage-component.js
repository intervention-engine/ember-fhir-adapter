import DS from 'ember-data';

var MedicationStatementDosageComponent = DS.Model.extend({
    text: DS.attr('string'),
    schedule: DS.belongsTo('timing', {embedded: true}),
    asNeededBoolean: DS.attr('boolean'),
    asNeededCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    site: DS.belongsTo('codeable-concept', {embedded: true}),
    route: DS.belongsTo('codeable-concept', {embedded: true}),
    method: DS.belongsTo('codeable-concept', {embedded: true}),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    rate: DS.belongsTo('ratio', {embedded: true}),
    maxDosePerPeriod: DS.belongsTo('ratio', {embedded: true})
});
export default MedicationStatementDosageComponent;
