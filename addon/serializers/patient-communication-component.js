import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var PatientCommunicationComponent = ApplicationSerializer.extend({
    attrs:{
        language : {embedded: 'always'}
    }
});
export default PatientCommunicationComponent;
