import DS from 'ember-data';

var AuditEventObjectDetailComponent = DS.Model.extend({
    type: DS.attr('string'),
    value: DS.attr('string')
});
export default AuditEventObjectDetailComponent;
