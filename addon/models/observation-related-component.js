import DS from 'ember-data';

var ObservationRelatedComponent = DS.Model.extend({
    type: DS.attr('string'),
    target: DS.belongsTo('reference', {embedded: true})
});
export default ObservationRelatedComponent;
