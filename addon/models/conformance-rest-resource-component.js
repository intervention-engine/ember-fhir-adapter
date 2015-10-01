import DS from 'ember-data';

var ConformanceRestResourceComponent = DS.Model.extend({
    type: DS.attr('string'),
    profile: DS.belongsTo('reference', {embedded: true}),
    interaction:  DS.hasMany('conformance-resource-interaction-component', {embedded: true}),
    versioning: DS.attr('string'),
    readHistory: DS.attr('boolean'),
    updateCreate: DS.attr('boolean'),
    conditionalCreate: DS.attr('boolean'),
    conditionalUpdate: DS.attr('boolean'),
    conditionalDelete: DS.attr('string'),
    searchInclude: DS.attr('string'),
    searchRevInclude: DS.attr('string'),
    searchParam:  DS.hasMany('conformance-rest-resource-search-param-component', {embedded: true})
});
export default ConformanceRestResourceComponent;
