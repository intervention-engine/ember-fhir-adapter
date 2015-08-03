import DS from 'ember-data';

var ValueSetConceptDefinitionDesignationComponent = DS.Model.extend({
    language: DS.attr('string'),
    use: DS.belongsTo('coding', {embedded: true}),
    value: DS.attr('string')
});
export default ValueSetConceptDefinitionDesignationComponent;
