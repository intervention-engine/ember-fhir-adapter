import DS from 'ember-data';

var EpisodeOfCareStatusHistoryComponent = DS.Model.extend({
    status: DS.attr('string'),
    period: DS.belongsTo('period', {embedded: true})
});
export default EpisodeOfCareStatusHistoryComponent;
