import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceDocumentComponent = ApplicationSerializer.extend({
    attrs:{
        profile : {embedded: 'always'}
    }
});
export default ConformanceDocumentComponent;
