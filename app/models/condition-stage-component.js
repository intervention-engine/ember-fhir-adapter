import DS from 'ember-data';

var ConditionStageComponent = DS.Model.extend({
    summary: DS.belongsTo('codeable-concept', {embedded: true}),
    assessment: DS.hasMany('reference', {embedded: true})
});
export default ConditionStageComponent;
