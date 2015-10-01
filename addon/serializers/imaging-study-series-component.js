import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImagingStudySeriesComponent = ApplicationSerializer.extend({
    attrs:{
        number : {embedded: 'always'},
				modality : {embedded: 'always'},
				uid : {embedded: 'always'},
				numberOfInstances : {embedded: 'always'},
				url : {embedded: 'always'},
				bodySite : {embedded: 'always'},
				laterality : {embedded: 'always'},
				instance:  {embedded: 'always'}
    }
});
export default ImagingStudySeriesComponent;
