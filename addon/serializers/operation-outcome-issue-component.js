import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var OperationOutcomeIssueComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'}
    }
});
export default OperationOutcomeIssueComponent;
