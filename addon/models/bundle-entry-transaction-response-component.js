import DS from 'ember-data';

var BundleEntryTransactionResponseComponent = DS.Model.extend({
    status: DS.attr('string'),
    location: DS.attr('string'),
    etag: DS.attr('string'),
    lastModified: DS.attr('date')
});
export default BundleEntryTransactionResponseComponent;
