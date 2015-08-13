import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimResponseAddedItemComponent = ApplicationSerializer.extend({
    attrs:{
        sequenceLinkId : {embedded: 'always'},
				service : {embedded: 'always'},
				fee : {embedded: 'always'},
				noteNumberLinkId : {embedded: 'always'},
				adjudication:  {embedded: 'always'},
				detail:  {embedded: 'always'}
    }
});
export default ClaimResponseAddedItemComponent;
