import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceContactComponent = ApplicationSerializer.extend({
    attrs:{
        telecom : {embedded: 'always'}
    }
});
export default ConformanceContactComponent;
