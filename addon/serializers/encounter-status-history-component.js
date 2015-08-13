import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var EncounterStatusHistoryComponent = ApplicationSerializer.extend({
    attrs:{
        period : {embedded: 'always'}
    }
});
export default EncounterStatusHistoryComponent;
