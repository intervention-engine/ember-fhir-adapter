import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var HealthcareServiceAvailableTimeComponent = ApplicationSerializer.extend({
    attrs:{
        availableStartTime : {embedded: 'always'},
				availableEndTime : {embedded: 'always'}
    }
});
export default HealthcareServiceAvailableTimeComponent;
