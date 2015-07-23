import DS from 'ember-data';

var SearchParameterContactComponent = DS.Model.extend({
    name: DS.attr('string'),
    telecom: DS.hasMany('contact-point', {embedded: true})
});
export default SearchParameterContactComponent;
