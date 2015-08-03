import DS from 'ember-data';

var MessageHeaderMessageSourceComponent = DS.Model.extend({
    name: DS.attr('string'),
    software: DS.attr('string'),
    version: DS.attr('string'),
    contact: DS.belongsTo('contact-point', {embedded: true}),
    endpoint: DS.attr('string')
});
export default MessageHeaderMessageSourceComponent;
