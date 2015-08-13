import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ElementDefinitionMappingComponent = ApplicationSerializer.extend({
    attrs:{
        identity : {embedded: 'always'}
    }
});
export default ElementDefinitionMappingComponent;
