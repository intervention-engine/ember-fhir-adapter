import DS from 'ember-data';

var ElementDefinitionMappingComponent = DS.Model.extend({
    identity: DS.attr('string'),
    language: DS.attr('string'),
    map: DS.attr('string')
});
export default ElementDefinitionMappingComponent;
