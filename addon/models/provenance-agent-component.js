import DS from 'ember-data';

var ProvenanceAgentComponent = DS.Model.extend({
    role: DS.belongsTo('coding', {embedded: true}),
    actor: DS.belongsTo('reference', {embedded: true}),
    userId: DS.belongsTo('identifier', {embedded: true}),
    relatedAgent:  DS.hasMany('provenance-agent-related-agent-component', {embedded: true})
});
export default ProvenanceAgentComponent;
