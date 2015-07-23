import DS from 'ember-data';

var MedicationPrescriptionDispenseComponent = DS.Model.extend({
    medicationCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    medicationReference: DS.belongsTo('reference', {embedded: true}),
    validityPeriod: DS.belongsTo('period', {embedded: true}),
    numberOfRepeatsAllowed: DS.attr('number'),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    expectedSupplyDuration: DS.belongsTo('quantity', {embedded: true})
});
export default MedicationPrescriptionDispenseComponent;
