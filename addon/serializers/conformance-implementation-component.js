import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceImplementationComponent = ApplicationSerializer.extend({
    attrs:{
        url : {embedded: 'always'}
    }
});
export default ConformanceImplementationComponent;
