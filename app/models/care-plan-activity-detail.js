import DS from 'ember-data';
var CarePlanActivityDetail;

CarePlanActivityDetail = DS.Model.extend({
  category: DS.attr("string"),
  code: DS.belongsTo('codeable-concept', {embedded: 'always'}),
  reasonCodeableConcept: DS.belongsTo('codeable-concept', {embedded: 'always'}),
  reasonReference: DS.belongsTo('reference', {embedded: 'always'}), //Condition
  goal: DS.hasMany('goal', {embedded: 'always'}),
  status: DS.attr('string'),
  statusReason: DS.belongsTo('codeable-concept', {embedded: 'always'}),
  prohibited: DS.attr('boolean'),
  scheduledTiming: DS.belongsTo('timing', {embedded: 'always'}),
  scheduledPeriod: DS.belongsTo('period', {embedded: 'always'}),
  scheduledString: DS.attr('string'),
  location: DS.belongsTo('location', {embedded: 'always'}),
  performer: DS.hasMany('reference', {embedded: 'always'}), //Practitioner | Organization | RelatedPerson | Patient
  product: DS.hasMany('reference', {embedded: 'always'}), // Medication | Substance
  dailyAmount: DS.belongsTo('quantity', {embedded: 'always'}),
  quantity:  DS.belongsTo('quantity', {embedded: 'always'}),
  note: DS.attr("string")
  
});

export default CarePlanActivityDetail;
