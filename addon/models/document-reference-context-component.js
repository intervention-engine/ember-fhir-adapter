import DS from 'ember-data';

var DocumentReferenceContextComponent = DS.Model.extend({
    event: DS.hasMany('codeable-concept', {embedded: true}),
    period: DS.belongsTo('period', {embedded: true}),
    facilityType: DS.belongsTo('codeable-concept', {embedded: true}),
    practiceSetting: DS.belongsTo('codeable-concept', {embedded: true}),
    sourcePatientInfo: DS.belongsTo('reference', {embedded: true}),
    related:  DS.hasMany('document-reference-context-related-component', {embedded: true})
});
export default DocumentReferenceContextComponent;
