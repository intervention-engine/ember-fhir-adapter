import DS from 'ember-data';

var ClaimResponseNotesComponent = DS.Model.extend({
    number: DS.attr('number'),
    type: DS.belongsTo('coding', {embedded: true}),
    text: DS.attr('string')
});
export default ClaimResponseNotesComponent;
