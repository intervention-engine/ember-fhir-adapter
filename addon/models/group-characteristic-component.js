import DS from 'ember-data';

var GroupCharacteristicComponent = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    valueCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    valueBoolean: DS.attr('boolean'),
    valueQuantity: DS.belongsTo('quantity', {embedded: true}),
    valueRange: DS.belongsTo('range', {embedded: true}),
    exclude: DS.attr('boolean')
});
export default GroupCharacteristicComponent;
