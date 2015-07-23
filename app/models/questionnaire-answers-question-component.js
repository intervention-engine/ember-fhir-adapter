import DS from 'ember-data';

var QuestionnaireAnswersQuestionComponent = DS.Model.extend({
    linkId: DS.attr('string'),
    text: DS.attr('string'),
    answer:  DS.hasMany('questionnaire-answers-question-answer-component', {embedded: true}),
    group: DS.hasMany('questionnaire-answers-group-component', {embedded: true})
});
export default QuestionnaireAnswersQuestionComponent;
