import DS from 'ember-data';

var BundleEntryResponseComponent = DS.Model.extend({
    status: DS.attr('string'),
    location: DS.attr('string'),
    etag: DS.attr('string'),
    lastModified: DS.attr('date')
});
export default BundleEntryResponseComponent;
