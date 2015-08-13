import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MessageHeaderResponseComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				details : {embedded: 'always'}
    }
});
export default MessageHeaderResponseComponent;
