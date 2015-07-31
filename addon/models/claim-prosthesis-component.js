import DS from 'ember-data';

var ClaimProsthesisComponent = DS.Model.extend({
    initial: DS.attr('boolean'),
    priorDate: DS.attr('date'),
    priorMaterial: DS.belongsTo('coding', {embedded: true})
});
export default ClaimProsthesisComponent;
