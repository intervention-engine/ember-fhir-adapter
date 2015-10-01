import DS from 'ember-data';

var AuditEventParticipantNetworkComponent = DS.Model.extend({
    address: DS.attr('string'),
    type: DS.attr('string')
});
export default AuditEventParticipantNetworkComponent;
