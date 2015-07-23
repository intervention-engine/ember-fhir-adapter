import DS from 'ember-data';

var ObservationComponentComponent = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    valueQuantity: DS.belongsTo('quantity', {embedded: true}),
    valueCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    valueString: DS.attr('string'),
    valueRange: DS.belongsTo('range', {embedded: true}),
    valueRatio: DS.belongsTo('ratio', {embedded: true}),
    valueSampledData: DS.belongsTo('sampled-data', {embedded: true}),
    valueAttachment: DS.belongsTo('attachment', {embedded: true}),
    valueTime: DS.attr('date'),
    valueDateTime: DS.attr('date'),
    valuePeriod: DS.belongsTo('period', {embedded: true}),
    dataAbsentReason: DS.belongsTo('codeable-concept', {embedded: true}),
    referenceRange: DS.hasMany('observation-reference-range-component', {embedded: true})
});
export default ObservationComponentComponent;
