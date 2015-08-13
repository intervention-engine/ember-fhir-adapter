import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var PatientContactComponent = ApplicationSerializer.extend({
    attrs:{
        relationship : {embedded: 'always'},
				name : {embedded: 'always'},
				telecom : {embedded: 'always'},
				address : {embedded: 'always'},
				organization : {embedded: 'always'},
				period : {embedded: 'always'}
    }
});
export default PatientContactComponent;
