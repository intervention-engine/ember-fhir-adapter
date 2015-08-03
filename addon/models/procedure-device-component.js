import DS from 'ember-data';

var ProcedureDeviceComponent = DS.Model.extend({
    action: DS.belongsTo('codeable-concept', {embedded: true}),
    manipulated: DS.belongsTo('reference', {embedded: true})
});
export default ProcedureDeviceComponent;
