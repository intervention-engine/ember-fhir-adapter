import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProcedureDeviceComponent = ApplicationSerializer.extend({
    attrs:{
        action : {embedded: 'always'},
				manipulated : {embedded: 'always'}
    }
});
export default ProcedureDeviceComponent;
