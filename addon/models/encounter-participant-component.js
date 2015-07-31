import DS from 'ember-data';

var EncounterParticipantComponent = DS.Model.extend({
    type: DS.hasMany('codeable-concept', {embedded: true}),
    period: DS.belongsTo('period', {embedded: true}),
    individual: DS.belongsTo('reference', {embedded: true})
});
export default EncounterParticipantComponent;
