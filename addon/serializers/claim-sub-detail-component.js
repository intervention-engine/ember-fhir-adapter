import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimSubDetailComponent = ApplicationSerializer.extend({
    attrs:{
        sequence : {embedded: 'always'},
				type : {embedded: 'always'},
				service : {embedded: 'always'},
				quantity : {embedded: 'always'},
				unitPrice : {embedded: 'always'},
				factor : {embedded: 'always'},
				points : {embedded: 'always'},
				net : {embedded: 'always'},
				udi : {embedded: 'always'}
    }
});
export default ClaimSubDetailComponent;
