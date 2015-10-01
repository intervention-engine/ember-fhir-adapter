import DS from 'ember-data';

var ImplementationGuidePackageComponent = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    resource:  DS.hasMany('implementation-guide-package-resource-component', {embedded: true})
});
export default ImplementationGuidePackageComponent;
