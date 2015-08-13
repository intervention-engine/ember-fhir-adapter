import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImmunizationVaccinationProtocolComponent = ApplicationSerializer.extend({
    attrs:{
        doseSequence : {embedded: 'always'},
				authority : {embedded: 'always'},
				seriesDoses : {embedded: 'always'},
				doseTarget : {embedded: 'always'},
				doseStatus : {embedded: 'always'},
				doseStatusReason : {embedded: 'always'}
    }
});
export default ImmunizationVaccinationProtocolComponent;
