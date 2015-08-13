import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptTestMetadataComponent = ApplicationSerializer.extend({
    attrs:{
        link:  {embedded: 'always'},
				requires:  {embedded: 'always'},
				validates:  {embedded: 'always'}
    }
});
export default TestScriptTestMetadataComponent;
