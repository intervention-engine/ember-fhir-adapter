import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DeviceMetricCalibrationComponent = ApplicationSerializer.extend({
    attrs:{
        time : {embedded: 'always'}
    }
});
export default DeviceMetricCalibrationComponent;
