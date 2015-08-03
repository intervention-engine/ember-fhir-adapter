import DS from 'ember-data';

var ElementDefinitionTypeRefComponent = DS.Model.extend({
    code: DS.attr('string'),
    profile: DS.attr('string'),
    aggregation: DS.attr('string')
});
export default ElementDefinitionTypeRefComponent;
