import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImplementationGuidePackageComponent = ApplicationSerializer.extend({
    attrs:{
        resource:  {embedded: 'always'}
    }
});
export default ImplementationGuidePackageComponent;
