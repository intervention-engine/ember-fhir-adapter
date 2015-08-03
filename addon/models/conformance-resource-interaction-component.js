import DS from 'ember-data';

var ConformanceResourceInteractionComponent = DS.Model.extend({
    code: DS.attr('string'),
    documentation: DS.attr('string')
});
export default ConformanceResourceInteractionComponent;
