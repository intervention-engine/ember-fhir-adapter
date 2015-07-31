import DS from 'ember-data';

var ImmunizationRecommendationRecommendationProtocolComponent = DS.Model.extend({
    doseSequence: DS.attr('number'),
    description: DS.attr('string'),
    authority: DS.belongsTo('reference', {embedded: true}),
    series: DS.attr('string')
});
export default ImmunizationRecommendationRecommendationProtocolComponent;
