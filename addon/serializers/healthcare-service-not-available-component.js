import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var HealthcareServiceNotAvailableComponent = ApplicationSerializer.extend({
    attrs:{
        during : {embedded: 'always'}
    }
});
export default HealthcareServiceNotAvailableComponent;
