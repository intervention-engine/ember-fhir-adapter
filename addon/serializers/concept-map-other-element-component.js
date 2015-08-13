import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConceptMapOtherElementComponent = ApplicationSerializer.extend({
    attrs:{
        element : {embedded: 'always'},
				codeSystem : {embedded: 'always'}
    }
});
export default ConceptMapOtherElementComponent;
