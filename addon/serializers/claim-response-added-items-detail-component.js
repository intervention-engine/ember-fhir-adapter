import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimResponseAddedItemsDetailComponent = ApplicationSerializer.extend({
    attrs:{
        service : {embedded: 'always'},
				fee : {embedded: 'always'},
				adjudication:  {embedded: 'always'}
    }
});
export default ClaimResponseAddedItemsDetailComponent;
