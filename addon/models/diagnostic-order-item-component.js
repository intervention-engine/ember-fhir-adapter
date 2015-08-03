import DS from 'ember-data';

var DiagnosticOrderItemComponent = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    specimen: DS.hasMany('reference', {embedded: true}),
    bodySiteCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    bodySiteReference: DS.belongsTo('reference', {embedded: true}),
    status: DS.attr('string'),
    event: DS.hasMany('diagnostic-order-event-component', {embedded: true})
});
export default DiagnosticOrderItemComponent;
