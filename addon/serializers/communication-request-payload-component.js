import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var CommunicationRequestPayloadComponent = ApplicationSerializer.extend({
    attrs:{
        contentAttachment : {embedded: 'always'},
				contentReference : {embedded: 'always'}
    }
});
export default CommunicationRequestPayloadComponent;
