import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceRestSecurityComponent = ApplicationSerializer.extend({
    attrs:{
        service : {embedded: 'always'},
				certificate:  {embedded: 'always'}
    }
});
export default ConformanceRestSecurityComponent;
