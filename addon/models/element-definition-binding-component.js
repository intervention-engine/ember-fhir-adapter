import DS from 'ember-data';

var ElementDefinitionBindingComponent = DS.Model.extend({
    strength: DS.attr('string'),
    description: DS.attr('string'),
    valueSetUri: DS.attr('string'),
    valueSetReference: DS.belongsTo('reference', {embedded: true})
});
export default ElementDefinitionBindingComponent;
