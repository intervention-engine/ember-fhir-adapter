import DS from 'ember-data';

var QuestionnaireResponseGroupComponent = DS.Model.extend({
    linkId: DS.attr('string'),
    title: DS.attr('string'),
    text: DS.attr('string'),
    subject: DS.belongsTo('reference', {embedded: true}),
    group: DS.hasMany('questionnaire-response-group-component', {embedded: true}),
    question:  DS.hasMany('questionnaire-response-question-component', {embedded: true})
});
export default QuestionnaireResponseGroupComponent;
