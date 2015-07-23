import DS from 'ember-data';

var NutritionOrderOralDietNutrientComponent = DS.Model.extend({
    modifier: DS.belongsTo('codeable-concept', {embedded: true}),
    amount: DS.belongsTo('quantity', {embedded: true})
});
export default NutritionOrderOralDietNutrientComponent;
