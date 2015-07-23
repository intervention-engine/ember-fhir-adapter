import DS from 'ember-data';

var ImmunizationVaccinationProtocolComponent = DS.Model.extend({
    doseSequence: DS.attr('number'),
    description: DS.attr('string'),
    authority: DS.belongsTo('reference', {embedded: true}),
    series: DS.attr('string'),
    seriesDoses: DS.attr('number'),
    doseTarget: DS.belongsTo('codeable-concept', {embedded: true}),
    doseStatus: DS.belongsTo('codeable-concept', {embedded: true}),
    doseStatusReason: DS.belongsTo('codeable-concept', {embedded: true})
});
export default ImmunizationVaccinationProtocolComponent;
