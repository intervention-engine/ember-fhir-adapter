import DS from 'ember-data';

var ClaimResponseAddedItemComponent = DS.Model.extend({
    sequenceLinkId: DS.attr('number'),
    service: DS.belongsTo('coding', {embedded: true}),
    fee: DS.belongsTo('quantity', {embedded: true}),
    noteNumberLinkId: DS.attr('number'),
    adjudication:  DS.hasMany('claim-response-added-item-adjudication-component', {embedded: true}),
    detail:  DS.hasMany('claim-response-added-items-detail-component', {embedded: true})
});
export default ClaimResponseAddedItemComponent;
