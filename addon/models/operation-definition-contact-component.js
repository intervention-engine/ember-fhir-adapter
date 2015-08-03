import DS from 'ember-data';

var OperationDefinitionContactComponent = DS.Model.extend({
    name: DS.attr('string'),
    telecom: DS.hasMany('contact-point', {embedded: true})
});
export default OperationDefinitionContactComponent;
