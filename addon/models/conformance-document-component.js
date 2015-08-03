import DS from 'ember-data';

var ConformanceDocumentComponent = DS.Model.extend({
    mode: DS.attr('string'),
    documentation: DS.attr('string'),
    profile: DS.belongsTo('reference', {embedded: true})
});
export default ConformanceDocumentComponent;
