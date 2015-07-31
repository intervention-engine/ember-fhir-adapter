import DS from 'ember-data';

var AuditEventSourceComponent = DS.Model.extend({
    site: DS.attr('string'),
    identifier: DS.attr('string'),
    type: DS.hasMany('coding', {embedded: true})
});
export default AuditEventSourceComponent;
