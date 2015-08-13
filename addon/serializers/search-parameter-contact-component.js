import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var SearchParameterContactComponent = ApplicationSerializer.extend({
    attrs:{
        telecom : {embedded: 'always'}
    }
});
export default SearchParameterContactComponent;
