import DS from 'ember-data';

var HealthcareServiceServiceTypeComponent = DS.Model.extend({
    type: DS.belongsTo('codeable-concept', {embedded: true}),
    specialty: DS.hasMany('codeable-concept', {embedded: true})
});
export default HealthcareServiceServiceTypeComponent;
