import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptSetupComponent = ApplicationSerializer.extend({
    attrs:{
        operation:  {embedded: 'always'}
    }
});
export default TestScriptSetupComponent;
