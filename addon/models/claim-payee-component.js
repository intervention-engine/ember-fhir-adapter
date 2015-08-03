import DS from 'ember-data';

var ClaimPayeeComponent = DS.Model.extend({
    type: DS.belongsTo('coding', {embedded: true}),
    provider: DS.belongsTo('reference', {embedded: true}),
    organization: DS.belongsTo('reference', {embedded: true}),
    person: DS.belongsTo('reference', {embedded: true})
});
export default ClaimPayeeComponent;
