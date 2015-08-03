import DS from 'ember-data';

var CarePlanParticipantComponent = DS.Model.extend({
    role: DS.belongsTo('codeable-concept', {embedded: true}),
    member: DS.belongsTo('reference', {embedded: true})
});
export default CarePlanParticipantComponent;
