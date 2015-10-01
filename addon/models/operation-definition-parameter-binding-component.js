import DS from 'ember-data';

var OperationDefinitionParameterBindingComponent = DS.Model.extend({
    strength: DS.attr('string'),
    valueSetUri: DS.attr('string'),
    valueSetReference: DS.belongsTo('reference', {embedded: true})
});
export default OperationDefinitionParameterBindingComponent;
