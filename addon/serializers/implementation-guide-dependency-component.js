import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImplementationGuideDependencyComponent = ApplicationSerializer.extend({
    attrs:{
        uri : {embedded: 'always'}
    }
});
export default ImplementationGuideDependencyComponent;
