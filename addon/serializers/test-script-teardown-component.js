import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptTeardownComponent = ApplicationSerializer.extend({
    attrs:{
        action:  {embedded: 'always'}
    }
});
export default TestScriptTeardownComponent;
