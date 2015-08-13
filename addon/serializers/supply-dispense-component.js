import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var SupplyDispenseComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				type : {embedded: 'always'},
				quantity : {embedded: 'always'},
				suppliedItem : {embedded: 'always'},
				supplier : {embedded: 'always'},
				whenPrepared : {embedded: 'always'},
				destination : {embedded: 'always'},
				receiver : {embedded: 'always'}
    }
});
export default SupplyDispenseComponent;
