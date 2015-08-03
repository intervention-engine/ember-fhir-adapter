import DS from 'ember-data';

var TestScriptSetupComponent = DS.Model.extend({
    operation:  DS.hasMany('test-script-setup-operation-component', {embedded: true})
});
export default TestScriptSetupComponent;
