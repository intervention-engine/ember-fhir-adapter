import DS from 'ember-data';

var BundleLinkComponent = DS.Model.extend({
    relation: DS.attr('string'),
    url: DS.attr('string')
});
export default BundleLinkComponent;
