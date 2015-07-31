import DS from 'ember-data';

var ValueSetDefineComponent = DS.Model.extend({
    system: DS.attr('string'),
    version: DS.attr('string'),
    caseSensitive: DS.attr('boolean'),
    concept:  DS.hasMany('value-set-concept-definition-component', {embedded: true})
});
export default ValueSetDefineComponent;
