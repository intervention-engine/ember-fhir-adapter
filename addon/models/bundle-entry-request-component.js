import DS from 'ember-data';

var BundleEntryRequestComponent = DS.Model.extend({
    method: DS.attr('string'),
    url: DS.attr('string'),
    ifNoneMatch: DS.attr('string'),
    ifModifiedSince: DS.attr('date'),
    ifMatch: DS.attr('string'),
    ifNoneExist: DS.attr('string')
});
export default BundleEntryRequestComponent;
