import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceRestSecurityCertificateComponent = ApplicationSerializer.extend({
    attrs:{
        blob : {embedded: 'always'}
    }
});
export default ConformanceRestSecurityCertificateComponent;
