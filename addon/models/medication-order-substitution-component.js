import DS from 'ember-data';

var MedicationOrderSubstitutionComponent = DS.Model.extend({
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    reason: DS.belongsTo('codeable-concept', {embedded: true})
});
export default MedicationOrderSubstitutionComponent;
