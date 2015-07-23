import DS from 'ember-data';

var CompositionSectionComponent = DS.Model.extend({
    title: DS.attr('string'),
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    content: DS.belongsTo('reference', {embedded: true}),
    section: DS.hasMany('composition-section-component', {embedded: true})
});
export default CompositionSectionComponent;
