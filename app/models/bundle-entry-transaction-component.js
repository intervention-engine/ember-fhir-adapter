import DS from 'ember-data';

var BundleEntryTransactionComponent = DS.Model.extend({
    method: DS.attr('string'),
    url: DS.attr('string'),
    ifNoneMatch: DS.attr('string'),
    ifMatch: DS.attr('string'),
    ifModifiedSince: DS.attr('date'),
    ifNoneExist: DS.attr('string')
});
export default BundleEntryTransactionComponent;
