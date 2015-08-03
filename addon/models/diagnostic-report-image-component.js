import DS from 'ember-data';

var DiagnosticReportImageComponent = DS.Model.extend({
    comment: DS.attr('string'),
    link: DS.belongsTo('reference', {embedded: true})
});
export default DiagnosticReportImageComponent;
