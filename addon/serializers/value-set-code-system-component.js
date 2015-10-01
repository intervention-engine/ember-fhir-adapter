import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetCodeSystemComponent = ApplicationSerializer.extend({
    attrs:{
        system : {embedded: 'always'},
				concept:  {embedded: 'always'}
    }
});
export default ValueSetCodeSystemComponent;
