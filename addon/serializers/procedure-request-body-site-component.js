import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProcedureRequestBodySiteComponent = ApplicationSerializer.extend({
    attrs:{
        siteCodeableConcept : {embedded: 'always'}
    }
});
export default ProcedureRequestBodySiteComponent;
