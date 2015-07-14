import DS from 'ember-data';
var CarePlanActivity;

CarePlanActivity = DS.Model.extend({
  actionResulting: DS.hasMany('reference', {embedded: 'always'}), //Any
  notes: DS.attr("string"),
  reference: DS.belongsTo('reference', {embedded: 'always'}), //Appointment | CommunicationRequest | DeviceUseRequest | DiagnosticOrder | MedicationPrescription | NutritionOrder | Order | ProcedureRequest | ProcessRequest | ReferralRequest | Supply | VisionPrescription
  detail: DS.belongsTo('care-plan-activity-detail', {embedded: 'always'})
});

export default CarePlanActivity;
