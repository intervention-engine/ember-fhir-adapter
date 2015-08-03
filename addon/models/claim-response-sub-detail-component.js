import DS from 'ember-data';

var ClaimResponseSubDetailComponent = DS.Model.extend({
    sequenceLinkId: DS.attr('number'),
    adjudication:  DS.hasMany('claim-response-subdetail-adjudication-component', {embedded: true})
});
export default ClaimResponseSubDetailComponent;
