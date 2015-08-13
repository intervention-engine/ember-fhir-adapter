import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptFixtureComponent = ApplicationSerializer.extend({
    attrs:{
        uri : {embedded: 'always'},
				resource : {embedded: 'always'}
    }
});
export default TestScriptFixtureComponent;
