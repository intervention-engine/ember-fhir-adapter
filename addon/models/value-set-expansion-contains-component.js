import DS from 'ember-data';

var ValueSetExpansionContainsComponent = DS.Model.extend({
    system: DS.attr('string'),
    abstract: DS.attr('boolean'),
    version: DS.attr('string'),
    code: DS.attr('string'),
    display: DS.attr('string'),
    contains: DS.hasMany('value-set-expansion-contains-component', {embedded: true})
});
export default ValueSetExpansionContainsComponent;
