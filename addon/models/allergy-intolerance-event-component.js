import DS from 'ember-data';

var AllergyIntoleranceEventComponent = DS.Model.extend({
    substance: DS.belongsTo('codeable-concept', {embedded: true}),
    certainty: DS.attr('string'),
    manifestation: DS.hasMany('codeable-concept', {embedded: true}),
    description: DS.attr('string'),
    onset: DS.attr('date'),
    duration: DS.belongsTo('quantity', {embedded: true}),
    severity: DS.attr('string'),
    exposureRoute: DS.belongsTo('codeable-concept', {embedded: true}),
    comment: DS.attr('string')
});
export default AllergyIntoleranceEventComponent;
