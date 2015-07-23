import DS from 'ember-data';

var OrganizationContactComponent = DS.Model.extend({
    purpose: DS.belongsTo('codeable-concept', {embedded: true}),
    name: DS.belongsTo('human-name', {embedded: true}),
    telecom: DS.hasMany('contact-point', {embedded: true}),
    address: DS.belongsTo('address', {embedded: true})
});
export default OrganizationContactComponent;
