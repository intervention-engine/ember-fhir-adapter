import DS from 'ember-data';

var TestScriptTeardownComponent = DS.Model.extend({
    operation:  DS.hasMany('test-script-teardown-operation-component', {embedded: true})
});
export default TestScriptTeardownComponent;
