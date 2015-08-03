import DS from 'ember-data';

var TestScriptTestMetadataRequiresComponent = DS.Model.extend({
    type: DS.attr('string'),
    operations: DS.attr('string'),
    destination: DS.attr('number')
});
export default TestScriptTestMetadataRequiresComponent;
