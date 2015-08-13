import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var EpisodeOfCareStatusHistoryComponent = ApplicationSerializer.extend({
    attrs:{
        period : {embedded: 'always'}
    }
});
export default EpisodeOfCareStatusHistoryComponent;
