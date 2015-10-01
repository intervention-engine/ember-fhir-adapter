import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptMetadataComponent = ApplicationSerializer.extend({
    attrs:{
        link:  {embedded: 'always'},
				capability:  {embedded: 'always'}
    }
});
export default TestScriptMetadataComponent;
