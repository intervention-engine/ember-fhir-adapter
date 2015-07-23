import DS from 'ember-data';

var BundleEntryComponent = DS.Model.extend({
    base: DS.attr('string'),
    link: DS.hasMany('bundle-link-component', {embedded: true}),
    resource: DS.attr('interface{}'),
    search:  DS.belongsTo('bundle-entry-search-component', {embedded: true}),
    transaction:  DS.belongsTo('bundle-entry-transaction-component', {embedded: true}),
    transactionResponse:  DS.belongsTo('bundle-entry-transaction-response-component', {embedded: true})
});
export default BundleEntryComponent;
