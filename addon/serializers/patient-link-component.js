import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var PatientLinkComponent = ApplicationSerializer.extend({
    attrs:{
        other : {embedded: 'always'}
    }
});
export default PatientLinkComponent;
