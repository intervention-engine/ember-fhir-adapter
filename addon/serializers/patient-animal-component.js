import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var PatientAnimalComponent = ApplicationSerializer.extend({
    attrs:{
        species : {embedded: 'always'},
				breed : {embedded: 'always'},
				genderStatus : {embedded: 'always'}
    }
});
export default PatientAnimalComponent;
