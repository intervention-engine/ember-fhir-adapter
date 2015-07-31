import DS from 'ember-data';

var CarePlanActivityComponent = DS.Model.extend({
    actionResulting: DS.hasMany('reference', {embedded: true}),
    notes: DS.attr('string'),
    reference: DS.belongsTo('reference', {embedded: true}),
    detail:  DS.belongsTo('care-plan-activity-detail-component', {embedded: true})
});
export default CarePlanActivityComponent;
