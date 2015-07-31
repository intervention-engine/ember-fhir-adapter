import DS from 'ember-data';

var ImmunizationExplanationComponent = DS.Model.extend({
    reason: DS.hasMany('codeable-concept', {embedded: true}),
    reasonNotGiven: DS.hasMany('codeable-concept', {embedded: true})
});
export default ImmunizationExplanationComponent;
