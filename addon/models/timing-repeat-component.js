import DS from 'ember-data';

var TimingRepeatComponent = DS.Model.extend({
    boundsDuration: DS.belongsTo('quantity', {embedded: true}),
    boundsRange: DS.belongsTo('range', {embedded: true}),
    boundsPeriod: DS.belongsTo('period', {embedded: true}),
    count: DS.attr('number'),
    duration: DS.attr('number'),
    durationMax: DS.attr('number'),
    durationUnits: DS.attr('string'),
    frequency: DS.attr('number'),
    frequencyMax: DS.attr('number'),
    period: DS.attr('number'),
    periodMax: DS.attr('number'),
    periodUnits: DS.attr('string'),
    when: DS.attr('string')
});
export default TimingRepeatComponent;
