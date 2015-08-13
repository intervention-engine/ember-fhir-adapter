import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImagingStudySeriesInstanceComponent = ApplicationSerializer.extend({
    attrs:{
        number : {embedded: 'always'},
				uid : {embedded: 'always'},
				sopclass : {embedded: 'always'},
				content : {embedded: 'always'}
    }
});
export default ImagingStudySeriesInstanceComponent;
