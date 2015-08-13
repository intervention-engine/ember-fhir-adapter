import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetComposeComponent = ApplicationSerializer.extend({
    attrs:{
        import : {embedded: 'always'},
				include:  {embedded: 'always'},
				exclude : {embedded: 'always'}
    }
});
export default ValueSetComposeComponent;
