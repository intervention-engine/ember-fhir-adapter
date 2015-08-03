import DS from 'ember-data';

var DiagnosticOrderEventComponent = DS.Model.extend({
    status: DS.attr('string'),
    description: DS.belongsTo('codeable-concept', {embedded: true}),
    dateTime: DS.attr('date'),
    actor: DS.belongsTo('reference', {embedded: true})
});
export default DiagnosticOrderEventComponent;
