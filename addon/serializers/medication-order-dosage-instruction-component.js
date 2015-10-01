import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationOrderDosageInstructionComponent = ApplicationSerializer.extend({
    attrs:{
        additionalInstructions : {embedded: 'always'},
				timing : {embedded: 'always'},
				asNeededCodeableConcept : {embedded: 'always'},
				siteCodeableConcept : {embedded: 'always'},
				siteReference : {embedded: 'always'},
				route : {embedded: 'always'},
				method : {embedded: 'always'},
				doseRange : {embedded: 'always'},
				doseSimpleQuantity : {embedded: 'always'},
				rateRatio : {embedded: 'always'},
				rateRange : {embedded: 'always'},
				maxDosePerPeriod : {embedded: 'always'}
    }
});
export default MedicationOrderDosageInstructionComponent;
