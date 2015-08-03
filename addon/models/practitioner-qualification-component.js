import DS from 'ember-data';

var PractitionerQualificationComponent = DS.Model.extend({
    identifier: DS.hasMany('identifier', {embedded: true}),
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    period: DS.belongsTo('period', {embedded: true}),
    issuer: DS.belongsTo('reference', {embedded: true})
});
export default PractitionerQualificationComponent;
