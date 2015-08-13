import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MessageHeaderMessageDestinationComponent = ApplicationSerializer.extend({
    attrs:{
        target : {embedded: 'always'},
				endpoint : {embedded: 'always'}
    }
});
export default MessageHeaderMessageDestinationComponent;
