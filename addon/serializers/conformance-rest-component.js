import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConformanceRestComponent = ApplicationSerializer.extend({
    attrs:{
        security:  {embedded: 'always'},
				resource:  {embedded: 'always'},
				interaction:  {embedded: 'always'},
				searchParam : {embedded: 'always'},
				operation:  {embedded: 'always'},
				compartment : {embedded: 'always'}
    }
});
export default ConformanceRestComponent;
