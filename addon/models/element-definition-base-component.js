import DS from 'ember-data';

var ElementDefinitionBaseComponent = DS.Model.extend({
    path: DS.attr('string'),
    min: DS.attr('number'),
    max: DS.attr('string')
});
export default ElementDefinitionBaseComponent;
