import DS from 'ember-data';

var EncounterLocationComponent = DS.Model.extend({
    location: DS.belongsTo('reference', {embedded: true}),
    status: DS.attr('string'),
    period: DS.belongsTo('period', {embedded: true})
});
export default EncounterLocationComponent;
