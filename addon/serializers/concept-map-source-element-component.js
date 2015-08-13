import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConceptMapSourceElementComponent = ApplicationSerializer.extend({
    attrs:{
        codeSystem : {embedded: 'always'},
				target:  {embedded: 'always'}
    }
});
export default ConceptMapSourceElementComponent;
