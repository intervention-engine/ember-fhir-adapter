import DS from 'ember-data';

var ConformanceRestSecurityComponent = DS.Model.extend({
    cors: DS.attr('boolean'),
    service: DS.hasMany('codeable-concept', {embedded: true}),
    description: DS.attr('string'),
    certificate:  DS.hasMany('conformance-rest-security-certificate-component', {embedded: true})
});
export default ConformanceRestSecurityComponent;
