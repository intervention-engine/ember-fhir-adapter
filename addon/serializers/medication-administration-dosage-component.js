import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationAdministrationDosageComponent = ApplicationSerializer.extend({
    attrs:{
        siteCodeableConcept : {embedded: 'always'},
				siteReference : {embedded: 'always'},
				route : {embedded: 'always'},
				method : {embedded: 'always'},
				quantity : {embedded: 'always'},
				rateRatio : {embedded: 'always'},
				rateRange : {embedded: 'always'}
    }
});
export default MedicationAdministrationDosageComponent;
