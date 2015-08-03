import DS from 'ember-data';

var ImmunizationRecommendationRecommendationDateCriterionComponent = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    value: DS.attr('date')
});
export default ImmunizationRecommendationRecommendationDateCriterionComponent;
