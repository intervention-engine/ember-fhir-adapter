import DS from 'ember-data';

var TestScriptSetupComponent = DS.Model.extend({
    metadata: DS.belongsTo('test-script-metadata-component', {embedded: true}),
    action:  DS.hasMany('test-script-setup-action-component', {embedded: true})
});
export default TestScriptSetupComponent;
