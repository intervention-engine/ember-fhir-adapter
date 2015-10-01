import DS from 'ember-data';

var QuestionnaireResponseQuestionComponent = DS.Model.extend({
    linkId: DS.attr('string'),
    text: DS.attr('string'),
    answer:  DS.hasMany('questionnaire-response-question-answer-component', {embedded: true})
});
export default QuestionnaireResponseQuestionComponent;
