import DS from 'ember-data';

var CompositionAttesterComponent = DS.Model.extend({
    mode: DS.attr('string'),
    time: DS.attr('date'),
    party: DS.belongsTo('reference', {embedded: true})
});
export default CompositionAttesterComponent;
