import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var OperationDefinitionParameterComponent = ApplicationSerializer.extend({
    attrs:{
        min : {embedded: 'always'},
				profile : {embedded: 'always'},
				part:  {embedded: 'always'}
    }
});
export default OperationDefinitionParameterComponent;
