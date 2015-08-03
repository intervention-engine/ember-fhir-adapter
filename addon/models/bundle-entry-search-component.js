import DS from 'ember-data';

var BundleEntrySearchComponent = DS.Model.extend({
    mode: DS.attr('string'),
    score: DS.attr('number')
});
export default BundleEntrySearchComponent;
