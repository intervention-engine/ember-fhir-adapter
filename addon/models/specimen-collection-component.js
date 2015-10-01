import DS from 'ember-data';

var SpecimenCollectionComponent = DS.Model.extend({
    collector: DS.belongsTo('reference', {embedded: true}),
    comment: DS.attr('string'),
    collectedDateTime: DS.attr('date'),
    collectedPeriod: DS.belongsTo('period', {embedded: true}),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    method: DS.belongsTo('codeable-concept', {embedded: true}),
    bodySite: DS.belongsTo('codeable-concept', {embedded: true})
});
export default SpecimenCollectionComponent;
