import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProvenanceAgentComponent = ApplicationSerializer.extend({
    attrs:{
        role : {embedded: 'always'},
				actor : {embedded: 'always'},
				userId : {embedded: 'always'},
				relatedAgent:  {embedded: 'always'}
    }
});
export default ProvenanceAgentComponent;
