import DS from 'ember-data';

var QuestionnaireGroupComponent = DS.Model.extend({
    linkId: DS.attr('string'),
    title: DS.attr('string'),
    concept: DS.hasMany('coding', {embedded: true}),
    text: DS.attr('string'),
    required: DS.attr('boolean'),
    repeats: DS.attr('boolean'),
    group: DS.hasMany('questionnaire-group-component', {embedded: true}),
    question:  DS.hasMany('questionnaire-question-component', {embedded: true})
});
export default QuestionnaireGroupComponent;
