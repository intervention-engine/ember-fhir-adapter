import DS from 'ember-data';

var ClaimMissingTeethComponent = DS.Model.extend({
    tooth: DS.belongsTo('coding', {embedded: true}),
    reason: DS.belongsTo('coding', {embedded: true}),
    extractionDate: DS.attr('date')
});
export default ClaimMissingTeethComponent;
