import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DocumentReferenceRelatesToComponent = ApplicationSerializer.extend({
    attrs:{
        target : {embedded: 'always'}
    }
});
export default DocumentReferenceRelatesToComponent;
