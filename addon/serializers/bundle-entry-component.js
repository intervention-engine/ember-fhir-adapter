import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var BundleEntryComponent = ApplicationSerializer.extend({
    attrs:{
        link : {embedded: 'always'},
				fullUrl : {embedded: 'always'},
				resource : {embedded: 'always'},
				search:  {embedded: 'always'},
				request:  {embedded: 'always'},
				response:  {embedded: 'always'}
    }
});
export default BundleEntryComponent;
