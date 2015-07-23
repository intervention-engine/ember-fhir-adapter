import DS from 'ember-data';

var MedicationAdministrationDosageComponent = DS.Model.extend({
    text: DS.attr('string'),
    site: DS.belongsTo('codeable-concept', {embedded: true}),
    route: DS.belongsTo('codeable-concept', {embedded: true}),
    method: DS.belongsTo('codeable-concept', {embedded: true}),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    rate: DS.belongsTo('ratio', {embedded: true})
});
export default MedicationAdministrationDosageComponent;
