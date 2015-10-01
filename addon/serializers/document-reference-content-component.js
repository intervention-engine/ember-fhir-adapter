import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DocumentReferenceContentComponent = ApplicationSerializer.extend({
    attrs:{
        attachment : {embedded: 'always'},
				format : {embedded: 'always'}
    }
});
export default DocumentReferenceContentComponent;
