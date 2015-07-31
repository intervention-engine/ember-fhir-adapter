import DS from 'ember-data';

var ElementDefinitionConstraintComponent = DS.Model.extend({
    key: DS.attr('string'),
    name: DS.attr('string'),
    severity: DS.attr('string'),
    human: DS.attr('string'),
    xpath: DS.attr('string')
});
export default ElementDefinitionConstraintComponent;
