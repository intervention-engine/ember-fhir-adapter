import DS from 'ember-data';

var ClaimResponseItemDetailComponent = DS.Model.extend({
    sequenceLinkId: DS.attr('number'),
    adjudication:  DS.hasMany('claim-response-detail-adjudication-component', {embedded: true}),
    subDetail:  DS.hasMany('claim-response-sub-detail-component', {embedded: true})
});
export default ClaimResponseItemDetailComponent;
