import DS from 'ember-data';

var HealthcareServiceNotAvailableComponent = DS.Model.extend({
    description: DS.attr('string'),
    during: DS.belongsTo('period', {embedded: true})
});
export default HealthcareServiceNotAvailableComponent;
