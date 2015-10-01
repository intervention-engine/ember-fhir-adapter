import DS from 'ember-data';

var DetectedIssueMitigationComponent = DS.Model.extend({
    action: DS.belongsTo('codeable-concept', {embedded: true}),
    date: DS.attr('date'),
    author: DS.belongsTo('reference', {embedded: true})
});
export default DetectedIssueMitigationComponent;
