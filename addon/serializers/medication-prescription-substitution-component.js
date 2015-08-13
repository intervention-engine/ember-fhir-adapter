import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationPrescriptionSubstitutionComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				reason : {embedded: 'always'}
    }
});
export default MedicationPrescriptionSubstitutionComponent;
