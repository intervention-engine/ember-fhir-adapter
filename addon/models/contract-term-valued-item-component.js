import DS from 'ember-data';

var ContractTermValuedItemComponent = DS.Model.extend({
    entityCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    entityReference: DS.belongsTo('reference', {embedded: true}),
    identifier: DS.belongsTo('identifier', {embedded: true}),
    effectiveTime: DS.attr('date'),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    unitPrice: DS.belongsTo('quantity', {embedded: true}),
    factor: DS.attr('number'),
    points: DS.attr('number'),
    net: DS.belongsTo('quantity', {embedded: true})
});
export default ContractTermValuedItemComponent;
