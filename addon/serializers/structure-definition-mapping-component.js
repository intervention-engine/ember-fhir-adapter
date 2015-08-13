import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var StructureDefinitionMappingComponent = ApplicationSerializer.extend({
    attrs:{
        identity : {embedded: 'always'},
				uri : {embedded: 'always'}
    }
});
export default StructureDefinitionMappingComponent;
