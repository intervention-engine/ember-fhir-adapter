import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetConceptDefinitionDesignationComponent = ApplicationSerializer.extend({
    attrs:{
        use : {embedded: 'always'}
    }
});
export default ValueSetConceptDefinitionDesignationComponent;
