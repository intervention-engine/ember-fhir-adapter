import DS from 'ember-data';

var AllergyIntoleranceReactionComponent = DS.Model.extend({
    substance: DS.belongsTo('codeable-concept', {embedded: true}),
    certainty: DS.attr('string'),
    manifestation: DS.hasMany('codeable-concept', {embedded: true}),
    description: DS.attr('string'),
    onset: DS.attr('date'),
    severity: DS.attr('string'),
    exposureRoute: DS.belongsTo('codeable-concept', {embedded: true}),
    note: DS.belongsTo('annotation', {embedded: true})
});
export default AllergyIntoleranceReactionComponent;
