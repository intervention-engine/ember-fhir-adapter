import DS from 'ember-data';

var ProcedurePerformerComponent = DS.Model.extend({
    person: DS.belongsTo('reference', {embedded: true}),
    role: DS.belongsTo('codeable-concept', {embedded: true})
});
export default ProcedurePerformerComponent;
