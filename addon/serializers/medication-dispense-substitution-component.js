import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationDispenseSubstitutionComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				reason : {embedded: 'always'},
				responsibleParty : {embedded: 'always'}
    }
});
export default MedicationDispenseSubstitutionComponent;
