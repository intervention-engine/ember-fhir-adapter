import DS from 'ember-data';

var AuditEventEventComponent = DS.Model.extend({
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    subtype: DS.hasMany('codeable-concept', {embedded: true}),
    action: DS.attr('string'),
    dateTime: DS.attr('date'),
    outcome: DS.attr('string'),
    outcomeDesc: DS.attr('string'),
    purposeOfEvent: DS.hasMany('coding', {embedded: true})
});
export default AuditEventEventComponent;
