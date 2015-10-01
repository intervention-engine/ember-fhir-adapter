import DS from 'ember-data';

var AuditEventObjectComponent = DS.Model.extend({
    identifier: DS.belongsTo('identifier', {embedded: true}),
    reference: DS.belongsTo('reference', {embedded: true}),
    type: DS.belongsTo('coding', {embedded: true}),
    role: DS.belongsTo('coding', {embedded: true}),
    lifecycle: DS.belongsTo('coding', {embedded: true}),
    securityLabel: DS.hasMany('coding', {embedded: true}),
    name: DS.attr('string'),
    description: DS.attr('string'),
    query: DS.attr('string'),
    detail:  DS.hasMany('audit-event-object-detail-component', {embedded: true})
});
export default AuditEventObjectComponent;
