import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var QuestionnaireGroupComponent = ApplicationSerializer.extend({
    attrs:{
        concept : {embedded: 'always'},
				group : {embedded: 'always'},
				question:  {embedded: 'always'}
    }
});
export default QuestionnaireGroupComponent;
