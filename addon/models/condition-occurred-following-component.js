import DS from 'ember-data';

var ConditionOccurredFollowingComponent = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    target: DS.belongsTo('reference', {embedded: true})
});
export default ConditionOccurredFollowingComponent;
