import DS from 'ember-data';

var TestScriptTestComponent = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    metadata:  DS.belongsTo('test-script-test-metadata-component', {embedded: true}),
    operation:  DS.hasMany('test-script-test-operation-component', {embedded: true})
});
export default TestScriptTestComponent;
