import DS from 'ember-data';

var FamilyMemberHistoryConditionComponent = DS.Model.extend({
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    outcome: DS.belongsTo('codeable-concept', {embedded: true}),
    onsetAge: DS.belongsTo('quantity', {embedded: true}),
    onsetRange: DS.belongsTo('range', {embedded: true}),
    onsetString: DS.attr('string'),
    note: DS.attr('string')
});
export default FamilyMemberHistoryConditionComponent;
