import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetExpansionComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				total : {embedded: 'always'},
				offset : {embedded: 'always'},
				parameter:  {embedded: 'always'},
				contains:  {embedded: 'always'}
    }
});
export default ValueSetExpansionComponent;
