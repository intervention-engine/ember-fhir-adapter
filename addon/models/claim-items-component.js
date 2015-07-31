import DS from 'ember-data';

var ClaimItemsComponent = DS.Model.extend({
    sequence: DS.attr('number'),
    type: DS.belongsTo('coding', {embedded: true}),
    provider: DS.belongsTo('reference', {embedded: true}),
    diagnosisLinkId: DS.attr('number'),
    service: DS.belongsTo('coding', {embedded: true}),
    serviceDate: DS.attr('date'),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    unitPrice: DS.belongsTo('quantity', {embedded: true}),
    factor: DS.attr('number'),
    points: DS.attr('number'),
    net: DS.belongsTo('quantity', {embedded: true}),
    udi: DS.belongsTo('coding', {embedded: true}),
    bodySite: DS.belongsTo('coding', {embedded: true}),
    subSite: DS.hasMany('coding', {embedded: true}),
    modifier: DS.hasMany('coding', {embedded: true}),
    detail:  DS.hasMany('claim-detail-component', {embedded: true}),
    prosthesis:  DS.belongsTo('claim-prosthesis-component', {embedded: true})
});
export default ClaimItemsComponent;
