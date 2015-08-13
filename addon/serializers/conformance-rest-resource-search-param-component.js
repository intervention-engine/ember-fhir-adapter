import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceRestResourceSearchParamComponent = ApplicationSerializer.extend({
    attrs:{
        definition : {embedded: 'always'}
    }
});
export default ConformanceRestResourceSearchParamComponent;
