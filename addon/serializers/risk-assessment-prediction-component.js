import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var RiskAssessmentPredictionComponent = ApplicationSerializer.extend({
    attrs:{
        outcome : {embedded: 'always'},
				probabilityDecimal : {embedded: 'always'},
				relativeRisk : {embedded: 'always'},
				whenPeriod : {embedded: 'always'}
    }
});
export default RiskAssessmentPredictionComponent;
