import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationStatementDosageComponent = ApplicationSerializer.extend({
    attrs:{
        timing : {embedded: 'always'},
				asNeededCodeableConcept : {embedded: 'always'},
				siteCodeableConcept : {embedded: 'always'},
				siteReference : {embedded: 'always'},
				route : {embedded: 'always'},
				method : {embedded: 'always'},
				quantitySimpleQuantity : {embedded: 'always'},
				quantityRange : {embedded: 'always'},
				rateRatio : {embedded: 'always'},
				rateRange : {embedded: 'always'},
				maxDosePerPeriod : {embedded: 'always'}
    }
});
export default MedicationStatementDosageComponent;
