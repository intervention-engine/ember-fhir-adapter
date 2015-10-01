import DS from 'ember-data';

var OperationOutcomeIssueComponent = DS.Model.extend({
    severity: DS.attr('string'),
    code: DS.attr('string'),
    details: DS.belongsTo('codeable-concept', {embedded: true}),
    diagnostics: DS.attr('string'),
    location: DS.attr('string')
});
export default OperationOutcomeIssueComponent;
