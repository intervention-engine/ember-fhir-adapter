import DS from 'ember-data';

var CompositionEventComponent = DS.Model.extend({
    code: DS.hasMany('codeable-concept', {embedded: true}),
    period: DS.belongsTo('period', {embedded: true}),
    detail: DS.hasMany('reference', {embedded: true})
});
export default CompositionEventComponent;
