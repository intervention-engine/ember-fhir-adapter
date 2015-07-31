import DS from 'ember-data';

var DataElementMappingComponent = DS.Model.extend({
    identity: DS.attr('string'),
    uri: DS.attr('string'),
    name: DS.attr('string'),
    comments: DS.attr('string')
});
export default DataElementMappingComponent;
