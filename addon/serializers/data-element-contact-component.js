import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DataElementContactComponent = ApplicationSerializer.extend({
    attrs:{
        telecom : {embedded: 'always'}
    }
});
export default DataElementContactComponent;
