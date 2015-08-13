import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImagingObjectSelectionInstanceComponent = ApplicationSerializer.extend({
    attrs:{
        sopClass : {embedded: 'always'},
				uid : {embedded: 'always'},
				url : {embedded: 'always'},
				frames:  {embedded: 'always'}
    }
});
export default ImagingObjectSelectionInstanceComponent;
