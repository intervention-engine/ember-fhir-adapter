import DS from 'ember-data';

var ProcedureRelatedItemComponent = DS.Model.extend({
    type: DS.attr('string'),
    target: DS.belongsTo('reference', {embedded: true})
});
export default ProcedureRelatedItemComponent;
