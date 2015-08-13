import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var EpisodeOfCareCareTeamComponent = ApplicationSerializer.extend({
    attrs:{
        member : {embedded: 'always'},
				role : {embedded: 'always'},
				period : {embedded: 'always'}
    }
});
export default EpisodeOfCareCareTeamComponent;
