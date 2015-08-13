import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetDefineComponent = ApplicationSerializer.extend({
    attrs:{
        system : {embedded: 'always'},
				concept:  {embedded: 'always'}
    }
});
export default ValueSetDefineComponent;
