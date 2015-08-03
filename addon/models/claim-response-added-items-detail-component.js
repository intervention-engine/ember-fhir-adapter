import DS from 'ember-data';

var ClaimResponseAddedItemsDetailComponent = DS.Model.extend({
    service: DS.belongsTo('coding', {embedded: true}),
    fee: DS.belongsTo('quantity', {embedded: true}),
    adjudication:  DS.hasMany('claim-response-added-item-detail-adjudication-component', {embedded: true})
});
export default ClaimResponseAddedItemsDetailComponent;
