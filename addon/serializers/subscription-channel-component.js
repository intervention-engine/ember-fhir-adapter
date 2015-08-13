import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var SubscriptionChannelComponent = ApplicationSerializer.extend({
    attrs:{
        endpoint : {embedded: 'always'}
    }
});
export default SubscriptionChannelComponent;
