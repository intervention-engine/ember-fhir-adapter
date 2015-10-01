import DS from 'ember-data';

var TestScriptTeardownActionComponent = DS.Model.extend({
    operation: DS.belongsTo('test-script-setup-action-operation-component', {embedded: true})
});
export default TestScriptTeardownActionComponent;
