import DS from 'ember-data';

var ValueSetExpansionParameterComponent = DS.Model.extend({
    name: DS.attr('string'),
    valueString: DS.attr('string'),
    valueBoolean: DS.attr('boolean'),
    valueInteger: DS.attr('number'),
    valueDecimal: DS.attr('number'),
    valueUri: DS.attr('string'),
    valueCode: DS.attr('string')
});
export default ValueSetExpansionParameterComponent;
