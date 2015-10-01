import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptTestComponent = ApplicationSerializer.extend({
    attrs:{
        metadata : {embedded: 'always'},
				action:  {embedded: 'always'}
    }
});
export default TestScriptTestComponent;
