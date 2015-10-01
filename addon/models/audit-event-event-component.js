import DS from 'ember-data';

var AuditEventEventComponent = DS.Model.extend({
    type: DS.belongsTo('coding', {embedded: true}),
    subtype: DS.hasMany('coding', {embedded: true}),
    action: DS.attr('string'),
    dateTime: DS.attr('date'),
    outcome: DS.attr('string'),
    outcomeDesc: DS.attr('string'),
    purposeOfEvent: DS.hasMany('coding', {embedded: true})
});
export default AuditEventEventComponent;
