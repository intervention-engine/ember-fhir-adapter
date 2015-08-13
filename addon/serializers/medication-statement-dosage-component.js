import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationStatementDosageComponent = ApplicationSerializer.extend({
    attrs:{
        schedule : {embedded: 'always'},
				asNeededCodeableConcept : {embedded: 'always'},
				site : {embedded: 'always'},
				route : {embedded: 'always'},
				method : {embedded: 'always'},
				quantity : {embedded: 'always'},
				rate : {embedded: 'always'},
				maxDosePerPeriod : {embedded: 'always'}
    }
});
export default MedicationStatementDosageComponent;
