import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConceptMapTargetElementComponent = ApplicationSerializer.extend({
    attrs:{
        codeSystem : {embedded: 'always'},
				dependsOn:  {embedded: 'always'},
				product : {embedded: 'always'}
    }
});
export default ConceptMapTargetElementComponent;
