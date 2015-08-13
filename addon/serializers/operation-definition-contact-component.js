import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var OperationDefinitionContactComponent = ApplicationSerializer.extend({
    attrs:{
        telecom : {embedded: 'always'}
    }
});
export default OperationDefinitionContactComponent;
