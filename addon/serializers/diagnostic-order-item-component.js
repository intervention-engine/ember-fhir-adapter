import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DiagnosticOrderItemComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				specimen : {embedded: 'always'},
				bodySiteCodeableConcept : {embedded: 'always'},
				event : {embedded: 'always'}
    }
});
export default DiagnosticOrderItemComponent;
