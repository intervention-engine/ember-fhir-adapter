import DS from 'ember-data';

var TestScriptVariableComponent = DS.Model.extend({
    name: DS.attr('string'),
    headerField: DS.attr('string'),
    path: DS.attr('string'),
    sourceId: DS.attr('string')
});
export default TestScriptVariableComponent;
