import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationOrderDispenseRequestComponent = ApplicationSerializer.extend({
    attrs:{
        medicationCodeableConcept : {embedded: 'always'},
				medicationReference : {embedded: 'always'},
				validityPeriod : {embedded: 'always'},
				numberOfRepeatsAllowed : {embedded: 'always'},
				quantity : {embedded: 'always'},
				expectedSupplyDuration : {embedded: 'always'}
    }
});
export default MedicationOrderDispenseRequestComponent;
