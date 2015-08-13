import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProcessRequestItemsComponent = ApplicationSerializer.extend({
    attrs:{
        sequenceLinkId : {embedded: 'always'}
    }
});
export default ProcessRequestItemsComponent;
