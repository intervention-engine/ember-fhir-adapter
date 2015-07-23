import DS from 'ember-data';

var ClaimResponseErrorsComponent = DS.Model.extend({
    sequenceLinkId: DS.attr('number'),
    detailSequenceLinkId: DS.attr('number'),
    subdetailSequenceLinkId: DS.attr('number'),
    code: DS.belongsTo('coding', {embedded: true})
});
export default ClaimResponseErrorsComponent;
