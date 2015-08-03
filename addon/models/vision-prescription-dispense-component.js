import DS from 'ember-data';

var VisionPrescriptionDispenseComponent = DS.Model.extend({
    product: DS.belongsTo('coding', {embedded: true}),
    eye: DS.attr('string'),
    sphere: DS.attr('number'),
    cylinder: DS.attr('number'),
    axis: DS.attr('number'),
    prism: DS.attr('number'),
    base: DS.attr('string'),
    add: DS.attr('number'),
    power: DS.attr('number'),
    backCurve: DS.attr('number'),
    diameter: DS.attr('number'),
    duration: DS.belongsTo('quantity', {embedded: true}),
    color: DS.attr('string'),
    brand: DS.attr('string'),
    notes: DS.attr('string')
});
export default VisionPrescriptionDispenseComponent;
