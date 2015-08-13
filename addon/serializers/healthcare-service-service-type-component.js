import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var HealthcareServiceServiceTypeComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				specialty : {embedded: 'always'}
    }
});
export default HealthcareServiceServiceTypeComponent;
