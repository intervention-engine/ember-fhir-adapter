import DS from 'ember-data';

var DeviceMetricCalibrationComponent = DS.Model.extend({
    type: DS.attr('string'),
    state: DS.attr('string'),
    time: DS.attr('date')
});
export default DeviceMetricCalibrationComponent;
