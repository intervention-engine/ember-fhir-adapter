import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImagingObjectSelectionStudyComponent = ApplicationSerializer.extend({
    attrs:{
        uid : {embedded: 'always'},
				url : {embedded: 'always'},
				series:  {embedded: 'always'}
    }
});
export default ImagingObjectSelectionStudyComponent;
