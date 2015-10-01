import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var EpisodeOfCareCareTeamComponent = ApplicationSerializer.extend({
    attrs:{
        role : {embedded: 'always'},
				period : {embedded: 'always'},
				member : {embedded: 'always'}
    }
});
export default EpisodeOfCareCareTeamComponent;
