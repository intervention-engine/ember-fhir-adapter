import DS from 'ember-data';

var TestScriptTeardownComponent = DS.Model.extend({
    action:  DS.hasMany('test-script-teardown-action-component', {embedded: true})
});
export default TestScriptTeardownComponent;
