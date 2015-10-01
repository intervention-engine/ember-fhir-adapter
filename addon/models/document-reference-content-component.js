import DS from 'ember-data';

var DocumentReferenceContentComponent = DS.Model.extend({
    attachment: DS.belongsTo('attachment', {embedded: true}),
    format: DS.hasMany('coding', {embedded: true})
});
export default DocumentReferenceContentComponent;
