import DS from 'ember-data';

var TestScriptMetadataComponent = DS.Model.extend({
    link:  DS.hasMany('test-script-metadata-link-component', {embedded: true}),
    capability:  DS.hasMany('test-script-metadata-capability-component', {embedded: true})
});
export default TestScriptMetadataComponent;
