import DS from 'ember-data';

var SupplyRequestWhenComponent = DS.Model.extend({
    code: DS.belongsTo('codeable-concept', {embedded: true}),
    schedule: DS.belongsTo('timing', {embedded: true})
});
export default SupplyRequestWhenComponent;
