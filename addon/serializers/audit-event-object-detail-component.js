import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var AuditEventObjectDetailComponent = ApplicationSerializer.extend({
    attrs:{
        value : {embedded: 'always'}
    }
});
export default AuditEventObjectDetailComponent;
