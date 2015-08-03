import DS from 'ember-data';

var ContractFriendlyLanguageComponent = DS.Model.extend({
    contentAttachment: DS.belongsTo('attachment', {embedded: true}),
    contentReference: DS.belongsTo('reference', {embedded: true})
});
export default ContractFriendlyLanguageComponent;
