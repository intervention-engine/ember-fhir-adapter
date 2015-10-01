import DS from 'ember-data';

var MedicationAdministrationDosageComponent = DS.Model.extend({
    text: DS.attr('string'),
    siteCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    siteReference: DS.belongsTo('reference', {embedded: true}),
    route: DS.belongsTo('codeable-concept', {embedded: true}),
    method: DS.belongsTo('codeable-concept', {embedded: true}),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    rateRatio: DS.belongsTo('ratio', {embedded: true}),
    rateRange: DS.belongsTo('range', {embedded: true})
});
export default MedicationAdministrationDosageComponent;
