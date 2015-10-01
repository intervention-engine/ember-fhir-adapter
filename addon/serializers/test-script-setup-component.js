import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptSetupComponent = ApplicationSerializer.extend({
    attrs:{
        metadata : {embedded: 'always'},
				action:  {embedded: 'always'}
    }
});
export default TestScriptSetupComponent;
