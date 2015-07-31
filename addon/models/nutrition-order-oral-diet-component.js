import DS from 'ember-data';

var NutritionOrderOralDietComponent = DS.Model.extend({
    type: DS.hasMany('codeable-concept', {embedded: true}),
    schedule: DS.hasMany('timing', {embedded: true}),
    nutrient:  DS.hasMany('nutrition-order-oral-diet-nutrient-component', {embedded: true}),
    texture:  DS.hasMany('nutrition-order-oral-diet-texture-component', {embedded: true}),
    fluidConsistencyType: DS.hasMany('codeable-concept', {embedded: true}),
    instruction: DS.attr('string')
});
export default NutritionOrderOralDietComponent;
