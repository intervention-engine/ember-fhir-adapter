import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImmunizationRecommendationRecommendationComponent = ApplicationSerializer.extend({
    attrs:{
        vaccineType : {embedded: 'always'},
				doseNumber : {embedded: 'always'},
				forecastStatus : {embedded: 'always'},
				dateCriterion:  {embedded: 'always'},
				protocol:  {embedded: 'always'},
				supportingImmunization : {embedded: 'always'},
				supportingPatientInformation : {embedded: 'always'}
    }
});
export default ImmunizationRecommendationRecommendationComponent;
