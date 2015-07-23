import DS from 'ember-data';

var ConditionEvidenceComponent = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    detail: DS.hasMany('reference', {embedded: true})
});
export default ConditionEvidenceComponent;
