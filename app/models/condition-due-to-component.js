import DS from 'ember-data';

var ConditionDueToComponent = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    target: DS.belongsTo('reference', {embedded: true})
});
export default ConditionDueToComponent;
