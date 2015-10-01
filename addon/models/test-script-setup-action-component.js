import DS from 'ember-data';

var TestScriptSetupActionComponent = DS.Model.extend({
    operation:  DS.belongsTo('test-script-setup-action-operation-component', {embedded: true}),
    assert:  DS.belongsTo('test-script-setup-action-assert-component', {embedded: true})
});
export default TestScriptSetupActionComponent;
