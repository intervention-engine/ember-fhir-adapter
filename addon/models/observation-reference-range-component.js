import DS from 'ember-data';

var ObservationReferenceRangeComponent = DS.Model.extend({
    low: DS.belongsTo('quantity', {embedded: true}),
    high: DS.belongsTo('quantity', {embedded: true}),
    meaning: DS.belongsTo('codeable-concept', {embedded: true}),
    age: DS.belongsTo('range', {embedded: true}),
    text: DS.attr('string')
});
export default ObservationReferenceRangeComponent;
