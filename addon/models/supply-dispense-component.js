import DS from 'ember-data';

var SupplyDispenseComponent = DS.Model.extend({
    identifier: DS.belongsTo('identifier', {embedded: true}),
    status: DS.attr('string'),
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    suppliedItem: DS.belongsTo('reference', {embedded: true}),
    supplier: DS.belongsTo('reference', {embedded: true}),
    whenPrepared: DS.belongsTo('period', {embedded: true}),
    whenHandedOver: DS.attr('date'),
    destination: DS.belongsTo('reference', {embedded: true}),
    receiver: DS.hasMany('reference', {embedded: true})
});
export default SupplyDispenseComponent;
