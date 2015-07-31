import DS from 'ember-data';

var OperationDefinitionParameterPartComponent = DS.Model.extend({
    name: DS.attr('string'),
    min: DS.attr('number'),
    max: DS.attr('string'),
    documentation: DS.attr('string'),
    type: DS.attr('string'),
    profile: DS.belongsTo('reference', {embedded: true})
});
export default OperationDefinitionParameterPartComponent;
