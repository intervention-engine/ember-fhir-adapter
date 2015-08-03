import DS from 'ember-data';

var SubstanceIngredientComponent = DS.Model.extend({
    quantity: DS.belongsTo('ratio', {embedded: true}),
    substance: DS.belongsTo('reference', {embedded: true})
});
export default SubstanceIngredientComponent;
