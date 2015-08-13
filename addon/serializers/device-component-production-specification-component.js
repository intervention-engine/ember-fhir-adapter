import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DeviceComponentProductionSpecificationComponent = ApplicationSerializer.extend({
    attrs:{
        specType : {embedded: 'always'},
				componentId : {embedded: 'always'}
    }
});
export default DeviceComponentProductionSpecificationComponent;
