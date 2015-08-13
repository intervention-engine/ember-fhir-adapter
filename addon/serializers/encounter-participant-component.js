import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var EncounterParticipantComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				period : {embedded: 'always'},
				individual : {embedded: 'always'}
    }
});
export default EncounterParticipantComponent;
