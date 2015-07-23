import DS from 'ember-data';

var HealthcareServiceAvailableTimeComponent = DS.Model.extend({
    daysOfWeek: DS.attr('string'),
    allDay: DS.attr('boolean'),
    availableStartTime: DS.attr('date'),
    availableEndTime: DS.attr('date')
});
export default HealthcareServiceAvailableTimeComponent;
