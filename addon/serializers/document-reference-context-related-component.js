import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DocumentReferenceContextRelatedComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				ref : {embedded: 'always'}
    }
});
export default DocumentReferenceContextRelatedComponent;
