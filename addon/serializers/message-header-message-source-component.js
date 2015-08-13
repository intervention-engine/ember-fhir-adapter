import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MessageHeaderMessageSourceComponent = ApplicationSerializer.extend({
    attrs:{
        contact : {embedded: 'always'},
				endpoint : {embedded: 'always'}
    }
});
export default MessageHeaderMessageSourceComponent;
