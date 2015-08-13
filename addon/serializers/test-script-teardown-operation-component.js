import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptTeardownOperationComponent = ApplicationSerializer.extend({
    attrs:{
        source : {embedded: 'always'},
				target : {embedded: 'always'},
				destination : {embedded: 'always'},
				responseId : {embedded: 'always'}
    }
});
export default TestScriptTeardownOperationComponent;
