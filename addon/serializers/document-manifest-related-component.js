import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DocumentManifestRelatedComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				ref : {embedded: 'always'}
    }
});
export default DocumentManifestRelatedComponent;
