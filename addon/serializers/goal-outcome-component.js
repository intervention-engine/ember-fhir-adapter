import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var GoalOutcomeComponent = ApplicationSerializer.extend({
    attrs:{
        resultCodeableConcept : {embedded: 'always'}
    }
});
export default GoalOutcomeComponent;
