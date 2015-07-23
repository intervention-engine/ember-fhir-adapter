import DS from 'ember-data';

var ClaimDiagnosisComponent = DS.Model.extend({
    sequence: DS.attr('number'),
    diagnosis: DS.belongsTo('coding', {embedded: true})
});
export default ClaimDiagnosisComponent;
