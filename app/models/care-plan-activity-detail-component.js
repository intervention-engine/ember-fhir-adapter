import DS from 'ember-data';

var CarePlanActivityDetailComponent = DS.Model.extend({
    category: DS.attr('string'),
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    reasonCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    reasonReference: DS.belongsTo('reference', {embedded: true}),
    goal: DS.hasMany('reference', {embedded: true}),
    status: DS.attr('string'),
    statusReason: DS.belongsTo('codeable-concept', {embedded: true}),
    prohibited: DS.attr('boolean'),
    scheduledTiming: DS.belongsTo('timing', {embedded: true}),
    scheduledPeriod: DS.belongsTo('period', {embedded: true}),
    scheduledString: DS.attr('string'),
    location: DS.belongsTo('reference', {embedded: true}),
    performer: DS.hasMany('reference', {embedded: true}),
    product: DS.belongsTo('reference', {embedded: true}),
    dailyAmount: DS.belongsTo('quantity', {embedded: true}),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    note: DS.attr('string')
});
export default CarePlanActivityDetailComponent;
