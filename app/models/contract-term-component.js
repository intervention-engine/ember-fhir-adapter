import DS from 'ember-data';

var ContractTermComponent = DS.Model.extend({
    identifier: DS.belongsTo('identifier', {embedded: true}),
    issued: DS.attr('date'),
    applies: DS.belongsTo('period', {embedded: true}),
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    subType: DS.belongsTo('codeable-concept', {embedded: true}),
    subject: DS.belongsTo('reference', {embedded: true}),
    action: DS.hasMany('codeable-concept', {embedded: true}),
    actionReason: DS.hasMany('codeable-concept', {embedded: true}),
    actor:  DS.hasMany('contract-term-actor-component', {embedded: true}),
    text: DS.attr('string'),
    valuedItem:  DS.hasMany('contract-term-valued-item-component', {embedded: true}),
    group: DS.hasMany('contract-term-component', {embedded: true})
});
export default ContractTermComponent;
