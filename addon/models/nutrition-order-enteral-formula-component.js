import DS from 'ember-data';

var NutritionOrderEnteralFormulaComponent = DS.Model.extend({
    baseFormulaType: DS.belongsTo('codeable-concept', {embedded: true}),
    baseFormulaProductName: DS.attr('string'),
    additiveType: DS.belongsTo('codeable-concept', {embedded: true}),
    additiveProductName: DS.attr('string'),
    caloricDensity: DS.belongsTo('quantity', {embedded: true}),
    routeofAdministration: DS.belongsTo('codeable-concept', {embedded: true}),
    administration:  DS.hasMany('nutrition-order-enteral-formula-administration-component', {embedded: true}),
    maxVolumeToDeliver: DS.belongsTo('quantity', {embedded: true}),
    administrationInstruction: DS.attr('string')
});
export default NutritionOrderEnteralFormulaComponent;
