import DS from 'ember-data';

var ValueSetConceptDefinitionComponent = DS.Model.extend({
    code: DS.attr('string'),
    abstract: DS.attr('boolean'),
    display: DS.attr('string'),
    definition: DS.attr('string'),
    designation:  DS.hasMany('value-set-concept-definition-designation-component', {embedded: true}),
    concept: DS.hasMany('value-set-concept-definition-component', {embedded: true})
});
export default ValueSetConceptDefinitionComponent;
