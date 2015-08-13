import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var OrganizationContactComponent = ApplicationSerializer.extend({
    attrs:{
        purpose : {embedded: 'always'},
				name : {embedded: 'always'},
				telecom : {embedded: 'always'},
				address : {embedded: 'always'}
    }
});
export default OrganizationContactComponent;
