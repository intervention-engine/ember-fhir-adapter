import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConditionEvidenceComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				detail : {embedded: 'always'}
    }
});
export default ConditionEvidenceComponent;
