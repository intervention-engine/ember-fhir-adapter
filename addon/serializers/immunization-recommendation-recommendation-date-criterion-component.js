import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImmunizationRecommendationRecommendationDateCriterionComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'}
    }
});
export default ImmunizationRecommendationRecommendationDateCriterionComponent;
