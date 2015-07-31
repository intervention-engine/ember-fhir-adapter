import DS from 'ember-data';

var TestScriptTestMetadataValidatesComponent = DS.Model.extend({
    type: DS.attr('string'),
    operations: DS.attr('string'),
    destination: DS.attr('number')
});
export default TestScriptTestMetadataValidatesComponent;
