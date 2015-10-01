import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceMessagingComponent = ApplicationSerializer.extend({
    attrs:{
        endpoint:  {embedded: 'always'},
				reliableCache : {embedded: 'always'},
				event:  {embedded: 'always'}
    }
});
export default ConformanceMessagingComponent;
