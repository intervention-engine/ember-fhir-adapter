import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimResponseItemDetailComponent = ApplicationSerializer.extend({
    attrs:{
        sequenceLinkId : {embedded: 'always'},
				adjudication:  {embedded: 'always'},
				subDetail:  {embedded: 'always'}
    }
});
export default ClaimResponseItemDetailComponent;
