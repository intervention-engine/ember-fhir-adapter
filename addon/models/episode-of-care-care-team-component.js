import DS from 'ember-data';

var EpisodeOfCareCareTeamComponent = DS.Model.extend({
    role: DS.hasMany('codeable-concept', {embedded: true}),
    period: DS.belongsTo('period', {embedded: true}),
    member: DS.belongsTo('reference', {embedded: true})
});
export default EpisodeOfCareCareTeamComponent;
