import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DiagnosticReportImageComponent = ApplicationSerializer.extend({
    attrs:{
        link : {embedded: 'always'}
    }
});
export default DiagnosticReportImageComponent;
