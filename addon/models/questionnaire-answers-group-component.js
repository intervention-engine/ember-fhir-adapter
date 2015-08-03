import DS from 'ember-data';

var QuestionnaireAnswersGroupComponent = DS.Model.extend({
    linkId: DS.attr('string'),
    title: DS.attr('string'),
    text: DS.attr('string'),
    subject: DS.belongsTo('reference', {embedded: true}),
    group: DS.hasMany('questionnaire-answers-group-component', {embedded: true}),
    question:  DS.hasMany('questionnaire-answers-question-component', {embedded: true})
});
export default QuestionnaireAnswersGroupComponent;
