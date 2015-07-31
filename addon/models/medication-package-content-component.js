import DS from 'ember-data';

var MedicationPackageContentComponent = DS.Model.extend({
    item: DS.belongsTo('reference', {embedded: true}),
    amount: DS.belongsTo('quantity', {embedded: true})
});
export default MedicationPackageContentComponent;
