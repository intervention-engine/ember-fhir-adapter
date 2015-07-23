import DS from 'ember-data';

var ConformanceRestOperationComponent = DS.Model.extend({
    name: DS.attr('string'),
    definition: DS.belongsTo('reference', {embedded: true})
});
export default ConformanceRestOperationComponent;
