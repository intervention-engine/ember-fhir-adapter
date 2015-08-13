import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var BundleEntryComponent = ApplicationSerializer.extend({
    attrs:{
        base : {embedded: 'always'},
				link : {embedded: 'always'},
				resource : {embedded: 'always'},
				search:  {embedded: 'always'},
				transaction:  {embedded: 'always'},
				transactionResponse:  {embedded: 'always'}
    }
});
export default BundleEntryComponent;
