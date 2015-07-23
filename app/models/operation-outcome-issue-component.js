import DS from 'ember-data';

var OperationOutcomeIssueComponent = DS.Model.extend({
    severity: DS.attr('string'),
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    details: DS.attr('string'),
    location: DS.attr('string')
});
export default OperationOutcomeIssueComponent;
