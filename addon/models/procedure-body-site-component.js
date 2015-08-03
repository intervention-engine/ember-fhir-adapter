import DS from 'ember-data';

var ProcedureBodySiteComponent = DS.Model.extend({
    siteCodeableConcept: DS.belongsTo('codeable-concept', {embedded: true}),
    siteReference: DS.belongsTo('reference', {embedded: true})
});
export default ProcedureBodySiteComponent;
