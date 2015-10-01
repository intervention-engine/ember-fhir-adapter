import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptFixtureComponent = ApplicationSerializer.extend({
    attrs:{
        resource : {embedded: 'always'}
    }
});
export default TestScriptFixtureComponent;
