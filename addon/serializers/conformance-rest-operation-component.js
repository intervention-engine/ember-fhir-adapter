import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceRestOperationComponent = ApplicationSerializer.extend({
    attrs:{
        definition : {embedded: 'always'}
    }
});
export default ConformanceRestOperationComponent;
