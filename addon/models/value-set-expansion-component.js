import DS from 'ember-data';

var ValueSetExpansionComponent = DS.Model.extend({
    identifier: DS.attr('string'),
    timestamp: DS.attr('date'),
    parameter:  DS.hasMany('value-set-expansion-parameter-component', {embedded: true}),
    contains:  DS.hasMany('value-set-expansion-contains-component', {embedded: true})
});
export default ValueSetExpansionComponent;
