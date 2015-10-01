import DS from 'ember-data';

var ConformanceMessagingEventComponent = DS.Model.extend({
    code: DS.belongsTo('coding', {embedded: true}),
    category: DS.attr('string'),
    mode: DS.attr('string'),
    focus: DS.attr('string'),
    request: DS.belongsTo('reference', {embedded: true}),
    response: DS.belongsTo('reference', {embedded: true}),
    documentation: DS.attr('string')
});
export default ConformanceMessagingEventComponent;
