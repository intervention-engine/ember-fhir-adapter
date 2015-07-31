import DS from 'ember-data';

var ProcessResponseNotesComponent = DS.Model.extend({
    type: DS.belongsTo('coding', {embedded: true}),
    text: DS.attr('string')
});
export default ProcessResponseNotesComponent;
