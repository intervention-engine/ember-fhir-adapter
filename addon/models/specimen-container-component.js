import DS from 'ember-data';

var SpecimenContainerComponent = DS.Model.extend({
    identifier: DS.hasMany('identifier', {embedded: true}),
    description: DS.attr('string'),
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    capacity: DS.belongsTo('quantity', {embedded: true}),
    specimenQuantity: DS.belongsTo('quantity', {embedded: true}),
    additiveCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    additiveReference: DS.belongsTo('reference', {embedded: true})
});
export default SpecimenContainerComponent;
