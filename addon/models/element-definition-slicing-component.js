import DS from 'ember-data';

var ElementDefinitionSlicingComponent = DS.Model.extend({
    discriminator: DS.attr('string'),
    description: DS.attr('string'),
    ordered: DS.attr('boolean'),
    rules: DS.attr('string')
});
export default ElementDefinitionSlicingComponent;
