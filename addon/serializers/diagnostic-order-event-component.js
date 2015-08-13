import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DiagnosticOrderEventComponent = ApplicationSerializer.extend({
    attrs:{
        description : {embedded: 'always'},
				actor : {embedded: 'always'}
    }
});
export default DiagnosticOrderEventComponent;
