import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DiagnosticOrderItemComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				specimen : {embedded: 'always'},
				bodySite : {embedded: 'always'},
				event : {embedded: 'always'}
    }
});
export default DiagnosticOrderItemComponent;
