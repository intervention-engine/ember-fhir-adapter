import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimDiagnosisComponent = ApplicationSerializer.extend({
    attrs:{
        sequence : {embedded: 'always'},
				diagnosis : {embedded: 'always'}
    }
});
export default ClaimDiagnosisComponent;
