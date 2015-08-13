import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptTestMetadataRequiresComponent = ApplicationSerializer.extend({
    attrs:{
        destination : {embedded: 'always'}
    }
});
export default TestScriptTestMetadataRequiresComponent;
