import DS from 'ember-data';

var DeviceComponentProductionSpecificationComponent = DS.Model.extend({
    specType: DS.belongsTo('codeable-concept', {embedded: true}),
    componentId: DS.belongsTo('identifier', {embedded: true}),
    productionSpec: DS.attr('string')
});
export default DeviceComponentProductionSpecificationComponent;
