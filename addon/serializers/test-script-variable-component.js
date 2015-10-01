import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TestScriptVariableComponent = ApplicationSerializer.extend({
    attrs:{
        sourceId : {embedded: 'always'}
    }
});
export default TestScriptVariableComponent;
