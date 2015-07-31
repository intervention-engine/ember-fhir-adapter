import DS from 'ember-data';

var ClinicalImpressionFindingComponent = DS.Model.extend({
    item: DS.belongsTo('codeable-concept', {embedded: true}),
    cause: DS.attr('string')
});
export default ClinicalImpressionFindingComponent;
