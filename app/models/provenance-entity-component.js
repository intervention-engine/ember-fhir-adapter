import DS from 'ember-data';

var ProvenanceEntityComponent = DS.Model.extend({
    role: DS.attr('string'),
    type: DS.belongsTo('coding', {embedded: true}),
    reference: DS.attr('string'),
    display: DS.attr('string'),
    agent: DS.belongsTo('provenance-agent-component', {embedded: true})
});
export default ProvenanceEntityComponent;
