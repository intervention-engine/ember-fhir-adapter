import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var AuditEventSourceComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'}
    }
});
export default AuditEventSourceComponent;
