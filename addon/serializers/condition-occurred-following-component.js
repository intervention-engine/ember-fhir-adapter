import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConditionOccurredFollowingComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				target : {embedded: 'always'}
    }
});
export default ConditionOccurredFollowingComponent;
