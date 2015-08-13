import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationPrescriptionDispenseComponent = ApplicationSerializer.extend({
    attrs:{
        medicationCodeableConcept : {embedded: 'always'},
				validityPeriod : {embedded: 'always'},
				numberOfRepeatsAllowed : {embedded: 'always'},
				quantity : {embedded: 'always'},
				expectedSupplyDuration : {embedded: 'always'}
    }
});
export default MedicationPrescriptionDispenseComponent;
