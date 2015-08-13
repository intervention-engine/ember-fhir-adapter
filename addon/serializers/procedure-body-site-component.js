import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProcedureBodySiteComponent = ApplicationSerializer.extend({
    attrs:{
        siteCodeableConcept : {embedded: 'always'}
    }
});
export default ProcedureBodySiteComponent;
