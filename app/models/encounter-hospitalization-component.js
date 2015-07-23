import DS from 'ember-data';

var EncounterHospitalizationComponent = DS.Model.extend({
    preAdmissionIdentifier: DS.belongsTo('identifier', {embedded: true}),
    origin: DS.belongsTo('reference', {embedded: true}),
    admitSource: DS.belongsTo('codeable-concept', {embedded: true}),
    dietPreference: DS.belongsTo('codeable-concept', {embedded: true}),
    specialCourtesy: DS.hasMany('codeable-concept', {embedded: true}),
    specialArrangement: DS.hasMany('codeable-concept', {embedded: true}),
    destination: DS.belongsTo('reference', {embedded: true}),
    dischargeDisposition: DS.belongsTo('codeable-concept', {embedded: true}),
    dischargeDiagnosis: DS.belongsTo('reference', {embedded: true}),
    reAdmission: DS.attr('boolean')
});
export default EncounterHospitalizationComponent;
