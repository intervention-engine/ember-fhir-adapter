import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var AuditEventEventComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				subtype : {embedded: 'always'},
				dateTime : {embedded: 'always'},
				purposeOfEvent : {embedded: 'always'}
    }
});
export default AuditEventEventComponent;
