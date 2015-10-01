import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DetectedIssueMitigationComponent = ApplicationSerializer.extend({
    attrs:{
        action : {embedded: 'always'},
				author : {embedded: 'always'}
    }
});
export default DetectedIssueMitigationComponent;
