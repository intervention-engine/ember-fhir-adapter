import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ListEntryComponent = ApplicationSerializer.extend({
    attrs:{
        flag : {embedded: 'always'},
				item : {embedded: 'always'}
    }
});
export default ListEntryComponent;
