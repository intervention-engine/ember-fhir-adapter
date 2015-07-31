import DS from 'ember-data';

var ConceptMapTargetElementComponent = DS.Model.extend({
    codeSystem: DS.attr('string'),
    code: DS.attr('string'),
    equivalence: DS.attr('string'),
    comments: DS.attr('string'),
    dependsOn:  DS.hasMany('concept-map-other-element-component', {embedded: true}),
    product: DS.hasMany('concept-map-other-element-component', {embedded: true})
});
export default ConceptMapTargetElementComponent;
