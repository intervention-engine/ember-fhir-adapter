import DS from 'ember-data';

var ConformanceMessagingEndpointComponent = DS.Model.extend({
    protocol: DS.belongsTo('coding', {embedded: true}),
    address: DS.attr('string')
});
export default ConformanceMessagingEndpointComponent;
