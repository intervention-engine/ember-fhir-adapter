import DS from 'ember-data';

var ConformanceRestComponent = DS.Model.extend({
    mode: DS.attr('string'),
    documentation: DS.attr('string'),
    security:  DS.belongsTo('conformance-rest-security-component', {embedded: true}),
    resource:  DS.hasMany('conformance-rest-resource-component', {embedded: true}),
    interaction:  DS.hasMany('conformance-system-interaction-component', {embedded: true}),
    transactionMode: DS.attr('string'),
    searchParam: DS.hasMany('conformance-rest-resource-search-param-component', {embedded: true}),
    operation:  DS.hasMany('conformance-rest-operation-component', {embedded: true}),
    compartment: DS.attr('string')
});
export default ConformanceRestComponent;
