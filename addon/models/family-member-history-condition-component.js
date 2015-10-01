import DS from 'ember-data';

var FamilyMemberHistoryConditionComponent = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    outcome: DS.belongsTo('codeable-concept', {embedded: true}),
    onsetAge: DS.belongsTo('quantity', {embedded: true}),
    onsetRange: DS.belongsTo('range', {embedded: true}),
    onsetPeriod: DS.belongsTo('period', {embedded: true}),
    onsetString: DS.attr('string'),
    note: DS.belongsTo('annotation', {embedded: true})
});
export default FamilyMemberHistoryConditionComponent;
