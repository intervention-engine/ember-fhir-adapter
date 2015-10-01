import DS from 'ember-data';

var QuestionnaireResponseQuestionAnswerComponent = DS.Model.extend({
    valueBoolean: DS.attr('boolean'),
    valueDecimal: DS.attr('number'),
    valueInteger: DS.attr('number'),
    valueDate: DS.attr('date'),
    valueDateTime: DS.attr('date'),
    valueInstant: DS.attr('date'),
    valueTime: DS.attr('date'),
    valueString: DS.attr('string'),
    valueUri: DS.attr('string'),
    valueAttachment: DS.belongsTo('attachment', {embedded: true}),
    valueCoding: DS.belongsTo('coding', {embedded: true}),
    valueQuantity: DS.belongsTo('quantity', {embedded: true}),
    valueReference: DS.belongsTo('reference', {embedded: true}),
    group: DS.hasMany('questionnaire-response-group-component', {embedded: true})
});
export default QuestionnaireResponseQuestionAnswerComponent;
