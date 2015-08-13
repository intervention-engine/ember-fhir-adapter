import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProvenanceAgentComponent = ApplicationSerializer.extend({
    attrs:{
        role : {embedded: 'always'},
				type : {embedded: 'always'},
				referenceUri : {embedded: 'always'}
    }
});
export default ProvenanceAgentComponent;
