import DS from 'ember-data';

var CarePlanActivityDetailComponent = DS.Model.extend({
    category: DS.belongsTo('codeable-concept', {embedded: true}),
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    reasonCode: DS.hasMany('codeable-concept', {embedded: true}),
    reasonReference: DS.hasMany('reference', {embedded: true}),
    goal: DS.hasMany('reference', {embedded: true}),
    status: DS.attr('string'),
    statusReason: DS.belongsTo('codeable-concept', {embedded: true}),
    prohibited: DS.attr('boolean'),
    scheduledTiming: DS.belongsTo('timing', {embedded: true}),
    scheduledPeriod: DS.belongsTo('period', {embedded: true}),
    scheduledString: DS.attr('string'),
    location: DS.belongsTo('reference', {embedded: true}),
    performer: DS.hasMany('reference', {embedded: true}),
    productCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    productReference: DS.belongsTo('reference', {embedded: true}),
    dailyAmount: DS.belongsTo('quantity', {embedded: true}),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    description: DS.attr('string')
});
export default CarePlanActivityDetailComponent;
