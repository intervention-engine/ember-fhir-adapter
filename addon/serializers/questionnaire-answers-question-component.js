import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var QuestionnaireAnswersQuestionComponent = ApplicationSerializer.extend({
    attrs:{
        answer:  {embedded: 'always'},
				group : {embedded: 'always'}
    }
});
export default QuestionnaireAnswersQuestionComponent;
