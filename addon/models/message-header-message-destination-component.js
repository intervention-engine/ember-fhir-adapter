import DS from 'ember-data';

var MessageHeaderMessageDestinationComponent = DS.Model.extend({
    name: DS.attr('string'),
    target: DS.belongsTo('reference', {embedded: true}),
    endpoint: DS.attr('string')
});
export default MessageHeaderMessageDestinationComponent;
