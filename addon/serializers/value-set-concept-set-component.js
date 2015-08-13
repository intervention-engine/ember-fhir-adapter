import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetConceptSetComponent = ApplicationSerializer.extend({
    attrs:{
        system : {embedded: 'always'},
				concept:  {embedded: 'always'},
				filter:  {embedded: 'always'}
    }
});
export default ValueSetConceptSetComponent;
