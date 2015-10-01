import DS from 'ember-data';

var ProvenanceAgentRelatedAgentComponent = DS.Model.extend({
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    target: DS.attr('string')
});
export default ProvenanceAgentRelatedAgentComponent;
