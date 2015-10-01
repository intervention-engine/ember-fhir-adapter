import DS from 'ember-data';

var ConformanceMessagingComponent = DS.Model.extend({
    endpoint:  DS.hasMany('conformance-messaging-endpoint-component', {embedded: true}),
    reliableCache: DS.attr('number'),
    documentation: DS.attr('string'),
    event:  DS.hasMany('conformance-messaging-event-component', {embedded: true})
});
export default ConformanceMessagingComponent;
