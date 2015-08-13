import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceRestResourceComponent = ApplicationSerializer.extend({
    attrs:{
        profile : {embedded: 'always'},
				interaction:  {embedded: 'always'},
				searchParam:  {embedded: 'always'}
    }
});
export default ConformanceRestResourceComponent;
