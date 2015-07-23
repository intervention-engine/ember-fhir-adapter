import DS from 'ember-data';

var NutritionOrderEnteralFormulaAdministrationComponent = DS.Model.extend({
    schedule: DS.belongsTo('timing', {embedded: true}),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    rateQuantity: DS.belongsTo('quantity', {embedded: true}),
    rateRatio: DS.belongsTo('ratio', {embedded: true})
});
export default NutritionOrderEnteralFormulaAdministrationComponent;
