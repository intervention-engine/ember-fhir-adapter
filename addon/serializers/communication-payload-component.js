import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var CommunicationPayloadComponent = ApplicationSerializer.extend({
    attrs:{
        contentAttachment : {embedded: 'always'},
				contentReference : {embedded: 'always'}
    }
});
export default CommunicationPayloadComponent;
