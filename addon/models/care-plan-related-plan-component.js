import DS from 'ember-data';

var CarePlanRelatedPlanComponent = DS.Model.extend({
    code: DS.attr('string'),
    plan: DS.belongsTo('reference', {embedded: true})
});
export default CarePlanRelatedPlanComponent;
