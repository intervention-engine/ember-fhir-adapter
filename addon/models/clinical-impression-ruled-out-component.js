import DS from 'ember-data';

var ClinicalImpressionRuledOutComponent = DS.Model.extend({
    item: DS.belongsTo('codeable-concept', {embedded: true}),
    reason: DS.attr('string')
});
export default ClinicalImpressionRuledOutComponent;
