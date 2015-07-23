import DS from 'ember-data';

var TestScriptSetupOperationComponent = DS.Model.extend({
    type: DS.attr('string'),
    source: DS.attr('string'),
    target: DS.attr('string'),
    destination: DS.attr('number'),
    parameter: DS.attr('string'),
    responseId: DS.attr('string'),
    contentType: DS.attr('string')
});
export default TestScriptSetupOperationComponent;
