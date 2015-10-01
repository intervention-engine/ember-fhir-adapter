import DS from 'ember-data';

var ImplementationGuidePageComponent = DS.Model.extend({
    source: DS.attr('string'),
    name: DS.attr('string'),
    kind: DS.attr('string'),
    type: DS.attr('string'),
    package: DS.attr('string'),
    format: DS.attr('string'),
    page: DS.hasMany('implementation-guide-page-component', {embedded: true})
});
export default ImplementationGuidePageComponent;
