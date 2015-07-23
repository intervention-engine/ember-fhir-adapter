import DS from 'ember-data';

var ConformanceRestSecurityCertificateComponent = DS.Model.extend({
    type: DS.attr('string'),
    blob: DS.attr('string')
});
export default ConformanceRestSecurityCertificateComponent;
