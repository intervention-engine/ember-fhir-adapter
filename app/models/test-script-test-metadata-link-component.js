import DS from 'ember-data';

var TestScriptTestMetadataLinkComponent = DS.Model.extend({
    url: DS.attr('string'),
    description: DS.attr('string')
});
export default TestScriptTestMetadataLinkComponent;
