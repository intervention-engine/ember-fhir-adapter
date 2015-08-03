import DS from 'ember-data';

var ValueSetConceptSetFilterComponent = DS.Model.extend({
    property: DS.attr('string'),
    op: DS.attr('string'),
    value: DS.attr('string')
});
export default ValueSetConceptSetFilterComponent;
