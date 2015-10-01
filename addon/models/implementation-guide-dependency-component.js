import DS from 'ember-data';

var ImplementationGuideDependencyComponent = DS.Model.extend({
    type: DS.attr('string'),
    uri: DS.attr('string')
});
export default ImplementationGuideDependencyComponent;
