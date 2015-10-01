import DS from 'ember-data';

var ImmunizationRecommendationRecommendationComponent = DS.Model.extend({
    date: DS.attr('date'),
    vaccineCode: DS.belongsTo('codeable-concept', {embedded: true}),
    doseNumber: DS.attr('number'),
    forecastStatus: DS.belongsTo('codeable-concept', {embedded: true}),
    dateCriterion:  DS.hasMany('immunization-recommendation-recommendation-date-criterion-component', {embedded: true}),
    protocol:  DS.belongsTo('immunization-recommendation-recommendation-protocol-component', {embedded: true}),
    supportingImmunization: DS.hasMany('reference', {embedded: true}),
    supportingPatientInformation: DS.hasMany('reference', {embedded: true})
});
export default ImmunizationRecommendationRecommendationComponent;
