import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var PractitionerPractitionerRoleComponent = ApplicationSerializer.extend({
    attrs:{
        managingOrganization : {embedded: 'always'},
				role : {embedded: 'always'},
				specialty : {embedded: 'always'},
				period : {embedded: 'always'},
				location : {embedded: 'always'},
				healthcareService : {embedded: 'always'}
    }
});
export default PractitionerPractitionerRoleComponent;
