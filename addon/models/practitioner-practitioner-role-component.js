import DS from 'ember-data';

var PractitionerPractitionerRoleComponent = DS.Model.extend({
    managingOrganization: DS.belongsTo('reference', {embedded: true}),
    role: DS.belongsTo('codeable-concept', {embedded: true}),
    specialty: DS.hasMany('codeable-concept', {embedded: true}),
    period: DS.belongsTo('period', {embedded: true}),
    location: DS.hasMany('reference', {embedded: true}),
    healthcareService: DS.hasMany('reference', {embedded: true})
});
export default PractitionerPractitionerRoleComponent;
