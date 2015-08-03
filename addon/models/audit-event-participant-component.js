import DS from 'ember-data';

var AuditEventParticipantComponent = DS.Model.extend({
    role: DS.hasMany('codeable-concept', {embedded: true}),
    reference: DS.belongsTo('reference', {embedded: true}),
    userId: DS.attr('string'),
    altId: DS.attr('string'),
    name: DS.attr('string'),
    requestor: DS.attr('boolean'),
    location: DS.belongsTo('reference', {embedded: true}),
    policy: DS.attr('string'),
    media: DS.belongsTo('coding', {embedded: true}),
    network:  DS.belongsTo('audit-event-participant-network-component', {embedded: true}),
    purposeOfUse: DS.hasMany('coding', {embedded: true})
});
export default AuditEventParticipantComponent;
