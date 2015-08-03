import DS from 'ember-data';

var PaymentReconciliationDetailsComponent = DS.Model.extend({
    type: DS.belongsTo('coding', {embedded: true}),
    request: DS.belongsTo('reference', {embedded: true}),
    responce: DS.belongsTo('reference', {embedded: true}),
    submitter: DS.belongsTo('reference', {embedded: true}),
    payee: DS.belongsTo('reference', {embedded: true}),
    date: DS.attr('date'),
    amount: DS.belongsTo('quantity', {embedded: true})
});
export default PaymentReconciliationDetailsComponent;
