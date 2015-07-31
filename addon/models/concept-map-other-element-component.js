import DS from 'ember-data';

var ConceptMapOtherElementComponent = DS.Model.extend({
    element: DS.attr('string'),
    codeSystem: DS.attr('string'),
    code: DS.attr('string')
});
export default ConceptMapOtherElementComponent;
