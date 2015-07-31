import DS from 'ember-data';

var EpisodeOfCareCareTeamComponent = DS.Model.extend({
    member: DS.belongsTo('reference', {embedded: true}),
    role: DS.hasMany('codeable-concept', {embedded: true}),
    period: DS.belongsTo('period', {embedded: true})
});
export default EpisodeOfCareCareTeamComponent;
