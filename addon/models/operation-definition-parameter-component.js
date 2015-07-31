import DS from 'ember-data';

var OperationDefinitionParameterComponent = DS.Model.extend({
    name: DS.attr('string'),
    use: DS.attr('string'),
    min: DS.attr('number'),
    max: DS.attr('string'),
    documentation: DS.attr('string'),
    type: DS.attr('string'),
    profile: DS.belongsTo('reference', {embedded: true}),
    part:  DS.hasMany('operation-definition-parameter-part-component', {embedded: true})
});
export default OperationDefinitionParameterComponent;
