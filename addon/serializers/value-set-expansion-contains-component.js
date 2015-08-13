import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetExpansionContainsComponent = ApplicationSerializer.extend({
    attrs:{
        system : {embedded: 'always'},
				contains : {embedded: 'always'}
    }
});
export default ValueSetExpansionContainsComponent;
