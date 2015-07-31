import DS from 'ember-data';

var DocumentManifestContentComponent = DS.Model.extend({
    pAttachment: DS.belongsTo('attachment', {embedded: true}),
    pReference: DS.belongsTo('reference', {embedded: true})
});
export default DocumentManifestContentComponent;
