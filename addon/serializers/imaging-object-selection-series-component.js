import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImagingObjectSelectionSeriesComponent = ApplicationSerializer.extend({
    attrs:{
        uid : {embedded: 'always'},
				url : {embedded: 'always'},
				instance:  {embedded: 'always'}
    }
});
export default ImagingObjectSelectionSeriesComponent;
