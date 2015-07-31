import DS from 'ember-data';

var MedicationDispenseSubstitutionComponent = DS.Model.extend({
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    reason: DS.hasMany('codeable-concept', {embedded: true}),
    responsibleParty: DS.hasMany('reference', {embedded: true})
});
export default MedicationDispenseSubstitutionComponent;
