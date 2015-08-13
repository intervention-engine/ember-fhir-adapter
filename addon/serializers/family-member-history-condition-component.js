import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var FamilyMemberHistoryConditionComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				outcome : {embedded: 'always'},
				onsetAge : {embedded: 'always'},
				onsetRange : {embedded: 'always'}
    }
});
export default FamilyMemberHistoryConditionComponent;
