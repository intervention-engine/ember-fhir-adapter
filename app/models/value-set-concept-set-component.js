import DS from 'ember-data';

var ValueSetConceptSetComponent = DS.Model.extend({
    system: DS.attr('string'),
    version: DS.attr('string'),
    concept:  DS.hasMany('value-set-concept-reference-component', {embedded: true}),
    filter:  DS.hasMany('value-set-concept-set-filter-component', {embedded: true})
});
export default ValueSetConceptSetComponent;
