import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var BundleLinkComponent = ApplicationSerializer.extend({
    attrs:{
        url : {embedded: 'always'}
    }
});
export default BundleLinkComponent;
