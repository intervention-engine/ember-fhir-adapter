import DS from 'ember-data';

var MessageHeaderResponseComponent = DS.Model.extend({
    identifier: DS.attr('string'),
    code: DS.attr('string'),
    details: DS.belongsTo('reference', {embedded: true})
});
export default MessageHeaderResponseComponent;
