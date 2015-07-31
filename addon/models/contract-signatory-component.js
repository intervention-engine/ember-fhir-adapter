import DS from 'ember-data';

var ContractSignatoryComponent = DS.Model.extend({
    type: DS.belongsTo('coding', {embedded: true}),
    party: DS.belongsTo('reference', {embedded: true}),
    signature: DS.attr('string')
});
export default ContractSignatoryComponent;
