import DS from 'ember-data';

var BundleEntryComponent = DS.Model.extend({
    link: DS.hasMany('bundle-link-component', {embedded: true}),
    fullUrl: DS.attr('string'),
    resource: DS.attr('interface{}'),
    search:  DS.belongsTo('bundle-entry-search-component', {embedded: true}),
    request:  DS.belongsTo('bundle-entry-request-component', {embedded: true}),
    response:  DS.belongsTo('bundle-entry-response-component', {embedded: true})
});
export default BundleEntryComponent;
