import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var QuestionnaireAnswersQuestionAnswerComponent = ApplicationSerializer.extend({
    attrs:{
        valueDecimal : {embedded: 'always'}
    }
});
export default QuestionnaireAnswersQuestionAnswerComponent;
