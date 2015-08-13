import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var BundleEntryTransactionComponent = ApplicationSerializer.extend({
    attrs:{
        url : {embedded: 'always'},
				ifModifiedSince : {embedded: 'always'}
    }
});
export default BundleEntryTransactionComponent;
