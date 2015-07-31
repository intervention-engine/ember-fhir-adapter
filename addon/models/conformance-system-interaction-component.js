import DS from 'ember-data';

var ConformanceSystemInteractionComponent = DS.Model.extend({
    code: DS.attr('string'),
    documentation: DS.attr('string')
});
export default ConformanceSystemInteractionComponent;
