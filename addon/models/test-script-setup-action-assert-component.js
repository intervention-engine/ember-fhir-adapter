import DS from 'ember-data';

var TestScriptSetupActionAssertComponent = DS.Model.extend({
    label: DS.attr('string'),
    description: DS.attr('string'),
    direction: DS.attr('string'),
    compareToSourceId: DS.attr('string'),
    compareToSourcePath: DS.attr('string'),
    contentType: DS.attr('string'),
    headerField: DS.attr('string'),
    minimumId: DS.attr('string'),
    navigationLinks: DS.attr('boolean'),
    operator: DS.attr('string'),
    path: DS.attr('string'),
    resource: DS.attr('string'),
    response: DS.attr('string'),
    responseCode: DS.attr('string'),
    sourceId: DS.attr('string'),
    validateProfileId: DS.attr('string'),
    value: DS.attr('string'),
    warningOnly: DS.attr('boolean')
});
export default TestScriptSetupActionAssertComponent;
