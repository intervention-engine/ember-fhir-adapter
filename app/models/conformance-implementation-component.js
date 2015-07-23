import DS from 'ember-data';

var ConformanceImplementationComponent = DS.Model.extend({
    description: DS.attr('string'),
    url: DS.attr('string')
});
export default ConformanceImplementationComponent;
