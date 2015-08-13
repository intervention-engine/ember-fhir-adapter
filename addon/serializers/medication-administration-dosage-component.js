import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationAdministrationDosageComponent = ApplicationSerializer.extend({
    attrs:{
        site : {embedded: 'always'},
				route : {embedded: 'always'},
				method : {embedded: 'always'},
				quantity : {embedded: 'always'},
				rate : {embedded: 'always'}
    }
});
export default MedicationAdministrationDosageComponent;
