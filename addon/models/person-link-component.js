import DS from 'ember-data';

var PersonLinkComponent = DS.Model.extend({
    target: DS.belongsTo('reference', {embedded: true}),
    assurance: DS.attr('string')
});
export default PersonLinkComponent;
