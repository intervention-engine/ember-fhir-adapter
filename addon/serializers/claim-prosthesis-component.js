import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimProsthesisComponent = ApplicationSerializer.extend({
    attrs:{
        priorMaterial : {embedded: 'always'}
    }
});
export default ClaimProsthesisComponent;
