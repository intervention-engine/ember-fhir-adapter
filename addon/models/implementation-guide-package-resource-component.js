import DS from 'ember-data';

var ImplementationGuidePackageResourceComponent = DS.Model.extend({
    purpose: DS.attr('string'),
    name: DS.attr('string'),
    description: DS.attr('string'),
    acronym: DS.attr('string'),
    sourceUri: DS.attr('string'),
    sourceReference: DS.belongsTo('reference', {embedded: true}),
    exampleFor: DS.belongsTo('reference', {embedded: true})
});
export default ImplementationGuidePackageResourceComponent;
