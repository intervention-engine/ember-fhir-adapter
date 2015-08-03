import DS from 'ember-data';

var ProvenanceAgentComponent = DS.Model.extend({
    role: DS.belongsTo('coding', {embedded: true}),
    type: DS.belongsTo('coding', {embedded: true}),
    referenceUri: DS.attr('string'),
    referenceReference: DS.belongsTo('reference', {embedded: true}),
    display: DS.attr('string')
});
export default ProvenanceAgentComponent;
