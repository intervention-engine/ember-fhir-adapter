import DS from 'ember-data';

var TestScriptTestComponent = DS.Model.extend({
    name: DS.attr('string'),
    description: DS.attr('string'),
    metadata: DS.belongsTo('test-script-metadata-component', {embedded: true}),
    action:  DS.hasMany('test-script-test-action-component', {embedded: true})
});
export default TestScriptTestComponent;
