import DS from 'ember-data';

var ContractActorComponent = DS.Model.extend({
    entity: DS.belongsTo('reference', {embedded: true}),
    role: DS.hasMany('codeable-concept', {embedded: true})
});
export default ContractActorComponent;
