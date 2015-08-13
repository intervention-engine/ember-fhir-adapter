import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptTestMetadataLinkComponent = ApplicationSerializer.extend({
    attrs:{
        url : {embedded: 'always'}
    }
});
export default TestScriptTestMetadataLinkComponent;
