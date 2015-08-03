import DS from 'ember-data';

var TestScriptTestMetadataComponent = DS.Model.extend({
    link:  DS.hasMany('test-script-test-metadata-link-component', {embedded: true}),
    requires:  DS.hasMany('test-script-test-metadata-requires-component', {embedded: true}),
    validates:  DS.hasMany('test-script-test-metadata-validates-component', {embedded: true})
});
export default TestScriptTestMetadataComponent;
