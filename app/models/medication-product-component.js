import DS from 'ember-data';

var MedicationProductComponent = DS.Model.extend({
    form: DS.belongsTo('codeable-concept', {embedded: true}),
    ingredient:  DS.hasMany('medication-product-ingredient-component', {embedded: true}),
    batch:  DS.hasMany('medication-product-batch-component', {embedded: true})
});
export default MedicationProductComponent;
