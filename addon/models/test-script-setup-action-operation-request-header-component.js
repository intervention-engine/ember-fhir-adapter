import DS from 'ember-data';

var TestScriptSetupActionOperationRequestHeaderComponent = DS.Model.extend({
    field: DS.attr('string'),
    value: DS.attr('string')
});
export default TestScriptSetupActionOperationRequestHeaderComponent;
