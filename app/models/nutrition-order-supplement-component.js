import DS from 'ember-data';

var NutritionOrderSupplementComponent = DS.Model.extend({
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    productName: DS.attr('string'),
    schedule: DS.hasMany('timing', {embedded: true}),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    instruction: DS.attr('string')
});
export default NutritionOrderSupplementComponent;
