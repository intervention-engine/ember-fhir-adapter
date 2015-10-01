import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var GroupMemberComponent = ApplicationSerializer.extend({
    attrs:{
        entity : {embedded: 'always'},
				period : {embedded: 'always'}
    }
});
export default GroupMemberComponent;
