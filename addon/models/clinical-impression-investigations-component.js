import DS from 'ember-data';

var ClinicalImpressionInvestigationsComponent = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    item: DS.hasMany('reference', {embedded: true})
});
export default ClinicalImpressionInvestigationsComponent;
