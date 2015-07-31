import DS from 'ember-data';

var ConformanceRestResourceSearchParamComponent = DS.Model.extend({
    name: DS.attr('string'),
    definition: DS.attr('string'),
    type: DS.attr('string'),
    documentation: DS.attr('string'),
    target: DS.attr('string'),
    chain: DS.attr('string')
});
export default ConformanceRestResourceSearchParamComponent;
