import DS from 'ember-data';

var TestScriptMetadataCapabilityComponent = DS.Model.extend({
    required: DS.attr('boolean'),
    validated: DS.attr('boolean'),
    description: DS.attr('string'),
    destination: DS.attr('number'),
    link: DS.attr('string'),
    conformance: DS.belongsTo('reference', {embedded: true})
});
export default TestScriptMetadataCapabilityComponent;
