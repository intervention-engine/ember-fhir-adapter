import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationPrescriptionDosageInstructionComponent = ApplicationSerializer.extend({
    attrs:{
        additionalInstructions : {embedded: 'always'},
				scheduledPeriod : {embedded: 'always'},
				scheduledTiming : {embedded: 'always'},
				asNeededCodeableConcept : {embedded: 'always'},
				site : {embedded: 'always'},
				route : {embedded: 'always'},
				method : {embedded: 'always'},
				doseRange : {embedded: 'always'},
				doseQuantity : {embedded: 'always'},
				rate : {embedded: 'always'},
				maxDosePerPeriod : {embedded: 'always'}
    }
});
export default MedicationPrescriptionDosageInstructionComponent;
