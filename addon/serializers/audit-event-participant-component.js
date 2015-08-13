import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var AuditEventParticipantComponent = ApplicationSerializer.extend({
    attrs:{
        role : {embedded: 'always'},
				reference : {embedded: 'always'},
				location : {embedded: 'always'},
				policy : {embedded: 'always'},
				media : {embedded: 'always'},
				network:  {embedded: 'always'},
				purposeOfUse : {embedded: 'always'}
    }
});
export default AuditEventParticipantComponent;
