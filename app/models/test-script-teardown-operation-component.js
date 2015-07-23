import DS from 'ember-data';

var TestScriptTeardownOperationComponent = DS.Model.extend({
    type: DS.attr('string'),
    source: DS.attr('string'),
    target: DS.attr('string'),
    destination: DS.attr('number'),
    parameter: DS.attr('string'),
    responseId: DS.attr('string'),
    contentType: DS.attr('string')
});
export default TestScriptTeardownOperationComponent;
