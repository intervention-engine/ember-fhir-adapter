import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConceptMapContactComponent = ApplicationSerializer.extend({
    attrs:{
        telecom : {embedded: 'always'}
    }
});
export default ConceptMapContactComponent;
