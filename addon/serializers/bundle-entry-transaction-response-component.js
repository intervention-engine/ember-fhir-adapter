import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var BundleEntryTransactionResponseComponent = ApplicationSerializer.extend({
    attrs:{
        location : {embedded: 'always'},
				lastModified : {embedded: 'always'}
    }
});
export default BundleEntryTransactionResponseComponent;
