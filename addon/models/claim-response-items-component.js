import DS from 'ember-data';

var ClaimResponseItemsComponent = DS.Model.extend({
    sequenceLinkId: DS.attr('number'),
    noteNumber: DS.attr('number'),
    adjudication:  DS.hasMany('claim-response-item-adjudication-component', {embedded: true}),
    detail:  DS.hasMany('claim-response-item-detail-component', {embedded: true})
});
export default ClaimResponseItemsComponent;
