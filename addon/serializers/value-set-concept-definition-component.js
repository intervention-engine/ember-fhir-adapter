import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetConceptDefinitionComponent = ApplicationSerializer.extend({
    attrs:{
        designation:  {embedded: 'always'},
				concept : {embedded: 'always'}
    }
});
export default ValueSetConceptDefinitionComponent;
