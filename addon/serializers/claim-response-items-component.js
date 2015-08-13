import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimResponseItemsComponent = ApplicationSerializer.extend({
    attrs:{
        sequenceLinkId : {embedded: 'always'},
				noteNumber : {embedded: 'always'},
				adjudication:  {embedded: 'always'},
				detail:  {embedded: 'always'}
    }
});
export default ClaimResponseItemsComponent;
