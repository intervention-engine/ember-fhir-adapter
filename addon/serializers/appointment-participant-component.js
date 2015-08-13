import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var AppointmentParticipantComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				actor : {embedded: 'always'}
    }
});
export default AppointmentParticipantComponent;
