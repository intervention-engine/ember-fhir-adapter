import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptTestOperationComponent = ApplicationSerializer.extend({
    attrs:{
        source : {embedded: 'always'},
				target : {embedded: 'always'},
				destination : {embedded: 'always'},
				responseId : {embedded: 'always'}
    }
});
export default TestScriptTestOperationComponent;
