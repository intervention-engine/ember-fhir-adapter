import DS from 'ember-data';

var TestScriptMetadataLinkComponent = DS.Model.extend({
    url: DS.attr('string'),
    description: DS.attr('string')
});
export default TestScriptMetadataLinkComponent;
