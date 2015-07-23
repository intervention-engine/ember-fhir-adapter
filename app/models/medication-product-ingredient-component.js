import DS from 'ember-data';

var MedicationProductIngredientComponent = DS.Model.extend({
    item: DS.belongsTo('reference', {embedded: true}),
    amount: DS.belongsTo('ratio', {embedded: true})
});
export default MedicationProductIngredientComponent;
