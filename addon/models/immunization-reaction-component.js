import DS from 'ember-data';

var ImmunizationReactionComponent = DS.Model.extend({
    date: DS.attr('date'),
    detail: DS.belongsTo('reference', {embedded: true}),
    reported: DS.attr('boolean')
});
export default ImmunizationReactionComponent;
