import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var QuestionnaireQuestionComponent = ApplicationSerializer.extend({
    attrs:{
        concept : {embedded: 'always'},
				options : {embedded: 'always'},
				group : {embedded: 'always'}
    }
});
export default QuestionnaireQuestionComponent;
