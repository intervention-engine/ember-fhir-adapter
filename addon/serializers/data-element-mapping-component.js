import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DataElementMappingComponent = ApplicationSerializer.extend({
    attrs:{
        identity : {embedded: 'always'},
				uri : {embedded: 'always'}
    }
});
export default DataElementMappingComponent;
