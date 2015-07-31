import DS from 'ember-data';

var MedicationPackageComponent = DS.Model.extend({
    container: DS.belongsTo('codeable-concept', {embedded: true}),
    content:  DS.hasMany('medication-package-content-component', {embedded: true})
});
export default MedicationPackageComponent;
