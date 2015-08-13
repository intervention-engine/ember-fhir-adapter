import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImagingObjectSelectionFramesComponent = ApplicationSerializer.extend({
    attrs:{
        frameNumbers : {embedded: 'always'},
				url : {embedded: 'always'}
    }
});
export default ImagingObjectSelectionFramesComponent;
