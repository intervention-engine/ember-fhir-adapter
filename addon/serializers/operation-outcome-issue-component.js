import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var OperationOutcomeIssueComponent = ApplicationSerializer.extend({
    attrs:{
        details : {embedded: 'always'}
    }
});
export default OperationOutcomeIssueComponent;
