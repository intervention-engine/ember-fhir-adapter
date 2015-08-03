import DS from 'ember-data';

var ConditionLocationComponent = DS.Model.extend({
    siteCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    siteReference: DS.belongsTo('reference', {embedded: true})
});
export default ConditionLocationComponent;
