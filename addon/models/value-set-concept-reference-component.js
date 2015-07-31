import DS from 'ember-data';

var ValueSetConceptReferenceComponent = DS.Model.extend({
    code: DS.attr('string'),
    display: DS.attr('string'),
    designation: DS.hasMany('value-set-concept-definition-designation-component', {embedded: true})
});
export default ValueSetConceptReferenceComponent;
