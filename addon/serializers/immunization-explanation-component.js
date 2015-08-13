import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImmunizationExplanationComponent = ApplicationSerializer.extend({
    attrs:{
        reason : {embedded: 'always'},
				reasonNotGiven : {embedded: 'always'}
    }
});
export default ImmunizationExplanationComponent;
