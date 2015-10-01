import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var AuditEventSourceComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				type : {embedded: 'always'}
    }
});
export default AuditEventSourceComponent;
