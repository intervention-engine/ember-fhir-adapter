import DS from 'ember-data';

var CompositionSectionComponent = DS.Model.extend({
    title: DS.attr('string'),
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    text: DS.belongsTo('narrative', {embedded: true}),
    mode: DS.attr('string'),
    orderedBy: DS.belongsTo('codeable-concept', {embedded: true}),
    entry: DS.hasMany('reference', {embedded: true}),
    emptyReason: DS.belongsTo('codeable-concept', {embedded: true}),
    section: DS.hasMany('composition-section-component', {embedded: true})
});
export default CompositionSectionComponent;
