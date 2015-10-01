import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var AuditEventObjectComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				reference : {embedded: 'always'},
				type : {embedded: 'always'},
				role : {embedded: 'always'},
				lifecycle : {embedded: 'always'},
				securityLabel : {embedded: 'always'},
				query : {embedded: 'always'},
				detail:  {embedded: 'always'}
    }
});
export default AuditEventObjectComponent;
