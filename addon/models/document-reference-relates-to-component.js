import DS from 'ember-data';

var DocumentReferenceRelatesToComponent = DS.Model.extend({
    code: DS.attr('string'),
    target: DS.belongsTo('reference', {embedded: true})
});
export default DocumentReferenceRelatesToComponent;
