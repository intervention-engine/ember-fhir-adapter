import DS from 'ember-data';

var ClaimDetailComponent = DS.Model.extend({
    sequence: DS.attr('number'),
    type: DS.belongsTo('coding', {embedded: true}),
    service: DS.belongsTo('coding', {embedded: true}),
    quantity: DS.belongsTo('quantity', {embedded: true}),
    unitPrice: DS.belongsTo('quantity', {embedded: true}),
    factor: DS.attr('number'),
    points: DS.attr('number'),
    net: DS.belongsTo('quantity', {embedded: true}),
    udi: DS.belongsTo('coding', {embedded: true}),
    subDetail:  DS.hasMany('claim-sub-detail-component', {embedded: true})
});
export default ClaimDetailComponent;
