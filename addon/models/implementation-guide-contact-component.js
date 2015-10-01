import DS from 'ember-data';

var ImplementationGuideContactComponent = DS.Model.extend({
    name: DS.attr('string'),
    telecom: DS.hasMany('contact-point', {embedded: true})
});
export default ImplementationGuideContactComponent;
