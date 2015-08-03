import DS from 'ember-data';

var AppointmentParticipantComponent = DS.Model.extend({
    type: DS.hasMany('codeable-concept', {embedded: true}),
    actor: DS.belongsTo('reference', {embedded: true}),
    required: DS.attr('string'),
    status: DS.attr('string')
});
export default AppointmentParticipantComponent;
