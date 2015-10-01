import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProcedureFocalDeviceComponent = ApplicationSerializer.extend({
    attrs:{
        action : {embedded: 'always'},
				manipulated : {embedded: 'always'}
    }
});
export default ProcedureFocalDeviceComponent;
