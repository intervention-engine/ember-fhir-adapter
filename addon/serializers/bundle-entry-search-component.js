import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var BundleEntrySearchComponent = ApplicationSerializer.extend({
    attrs:{
        score : {embedded: 'always'}
    }
});
export default BundleEntrySearchComponent;
