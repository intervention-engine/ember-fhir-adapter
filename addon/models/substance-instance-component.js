import DS from 'ember-data';

var SubstanceInstanceComponent = DS.Model.extend({
    identifier: DS.belongsTo('identifier', {embedded: true}),
    expiry: DS.attr('date'),
    quantity: DS.belongsTo('quantity', {embedded: true})
});
export default SubstanceInstanceComponent;
