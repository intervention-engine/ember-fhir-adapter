import DS from 'ember-data';

var DocumentManifestRelatedComponent = DS.Model.extend({
    identifier: DS.belongsTo('identifier', {embedded: true}),
    ref: DS.belongsTo('reference', {embedded: true})
});
export default DocumentManifestRelatedComponent;
