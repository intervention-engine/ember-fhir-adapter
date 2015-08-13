import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptTeardownComponent = ApplicationSerializer.extend({
    attrs:{
        operation:  {embedded: 'always'}
    }
});
export default TestScriptTeardownComponent;
