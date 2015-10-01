import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var FamilyMemberHistoryConditionComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				outcome : {embedded: 'always'},
				onsetAge : {embedded: 'always'},
				onsetRange : {embedded: 'always'},
				onsetPeriod : {embedded: 'always'},
				note : {embedded: 'always'}
    }
});
export default FamilyMemberHistoryConditionComponent;
