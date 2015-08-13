import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptTestMetadataValidatesComponent = ApplicationSerializer.extend({
    attrs:{
        destination : {embedded: 'always'}
    }
});
export default TestScriptTestMetadataValidatesComponent;
