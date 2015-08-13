import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProvenanceEntityComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				reference : {embedded: 'always'},
				agent : {embedded: 'always'}
    }
});
export default ProvenanceEntityComponent;
