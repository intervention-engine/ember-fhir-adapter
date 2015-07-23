import DS from 'ember-data';

var ClaimCoverageComponent = DS.Model.extend({
    sequence: DS.attr('number'),
    focal: DS.attr('boolean'),
    coverage: DS.belongsTo('reference', {embedded: true}),
    businessArrangement: DS.attr('string'),
    relationship: DS.belongsTo('coding', {embedded: true}),
    preAuthRef: DS.attr('string'),
    claimResponse: DS.belongsTo('reference', {embedded: true}),
    originalRuleset: DS.belongsTo('coding', {embedded: true})
});
export default ClaimCoverageComponent;
