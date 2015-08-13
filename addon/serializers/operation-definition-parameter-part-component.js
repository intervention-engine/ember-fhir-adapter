import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var OperationDefinitionParameterPartComponent = ApplicationSerializer.extend({
    attrs:{
        min : {embedded: 'always'},
				profile : {embedded: 'always'}
    }
});
export default OperationDefinitionParameterPartComponent;
