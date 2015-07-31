import DS from 'ember-data';

var NutritionOrderOralDietTextureComponent = DS.Model.extend({
    modifier: DS.belongsTo('codeable-concept', {embedded: true}),
    foodType: DS.belongsTo('codeable-concept', {embedded: true})
});
export default NutritionOrderOralDietTextureComponent;
