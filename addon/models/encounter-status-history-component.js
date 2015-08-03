import DS from 'ember-data';

var EncounterStatusHistoryComponent = DS.Model.extend({
    status: DS.attr('string'),
    period: DS.belongsTo('period', {embedded: true})
});
export default EncounterStatusHistoryComponent;
