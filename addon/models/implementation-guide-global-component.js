import DS from 'ember-data';

var ImplementationGuideGlobalComponent = DS.Model.extend({
    type: DS.attr('string'),
    profile: DS.belongsTo('reference', {embedded: true})
});
export default ImplementationGuideGlobalComponent;
