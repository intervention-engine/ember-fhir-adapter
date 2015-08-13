import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ContractTermComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				applies : {embedded: 'always'},
				type : {embedded: 'always'},
				subType : {embedded: 'always'},
				subject : {embedded: 'always'},
				action : {embedded: 'always'},
				actionReason : {embedded: 'always'},
				actor:  {embedded: 'always'},
				valuedItem:  {embedded: 'always'},
				group : {embedded: 'always'}
    }
});
export default ContractTermComponent;
