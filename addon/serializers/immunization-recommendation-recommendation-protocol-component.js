import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImmunizationRecommendationRecommendationProtocolComponent = ApplicationSerializer.extend({
    attrs:{
        doseSequence : {embedded: 'always'},
				authority : {embedded: 'always'}
    }
});
export default ImmunizationRecommendationRecommendationProtocolComponent;
