import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConditionStageComponent = ApplicationSerializer.extend({
    attrs:{
        summary : {embedded: 'always'},
				assessment : {embedded: 'always'}
    }
});
export default ConditionStageComponent;
