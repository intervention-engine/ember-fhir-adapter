import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationOrderSubstitutionComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				reason : {embedded: 'always'}
    }
});
export default MedicationOrderSubstitutionComponent;
