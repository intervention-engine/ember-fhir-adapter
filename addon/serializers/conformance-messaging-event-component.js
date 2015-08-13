import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceMessagingEventComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				protocol : {embedded: 'always'},
				request : {embedded: 'always'},
				response : {embedded: 'always'}
    }
});
export default ConformanceMessagingEventComponent;
