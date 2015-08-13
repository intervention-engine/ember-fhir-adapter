import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var AuditEventObjectComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				reference : {embedded: 'always'},
				sensitivity : {embedded: 'always'},
				query : {embedded: 'always'},
				detail:  {embedded: 'always'}
    }
});
export default AuditEventObjectComponent;
