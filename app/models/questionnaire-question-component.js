import DS from 'ember-data';

var QuestionnaireQuestionComponent = DS.Model.extend({
    linkId: DS.attr('string'),
    concept: DS.hasMany('coding', {embedded: true}),
    text: DS.attr('string'),
    type: DS.attr('string'),
    required: DS.attr('boolean'),
    repeats: DS.attr('boolean'),
    options: DS.belongsTo('reference', {embedded: true}),
    group: DS.hasMany('questionnaire-group-component', {embedded: true})
});
export default QuestionnaireQuestionComponent;
