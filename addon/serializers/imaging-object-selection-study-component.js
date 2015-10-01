import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImagingObjectSelectionStudyComponent = ApplicationSerializer.extend({
    attrs:{
        uid : {embedded: 'always'},
				url : {embedded: 'always'},
				imagingStudy : {embedded: 'always'},
				series:  {embedded: 'always'}
    }
});
export default ImagingObjectSelectionStudyComponent;
