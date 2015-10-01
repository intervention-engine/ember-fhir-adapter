import DS from 'ember-data';

var GroupMemberComponent = DS.Model.extend({
    entity: DS.belongsTo('reference', {embedded: true}),
    period: DS.belongsTo('period', {embedded: true}),
    inactive: DS.attr('boolean')
});
export default GroupMemberComponent;
