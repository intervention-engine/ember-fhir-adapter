import DS from 'ember-data';

var ConceptMapSourceElementComponent = DS.Model.extend({
    codeSystem: DS.attr('string'),
    code: DS.attr('string'),
    target:  DS.hasMany('concept-map-target-element-component', {embedded: true})
});
export default ConceptMapSourceElementComponent;
