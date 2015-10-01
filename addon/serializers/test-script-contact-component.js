import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptContactComponent = ApplicationSerializer.extend({
    attrs:{
        telecom : {embedded: 'always'}
    }
});
export default TestScriptContactComponent;
