import DS from 'ember-data';

var PaymentReconciliationNotesComponent = DS.Model.extend({
    type: DS.belongsTo('coding', {embedded: true}),
    text: DS.attr('string')
});
export default PaymentReconciliationNotesComponent;
