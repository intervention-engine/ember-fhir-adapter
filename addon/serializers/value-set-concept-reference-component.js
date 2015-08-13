import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetConceptReferenceComponent = ApplicationSerializer.extend({
    attrs:{
        designation : {embedded: 'always'}
    }
});
export default ValueSetConceptReferenceComponent;
