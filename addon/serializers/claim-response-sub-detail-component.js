import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimResponseSubDetailComponent = ApplicationSerializer.extend({
    attrs:{
        sequenceLinkId : {embedded: 'always'},
				adjudication:  {embedded: 'always'}
    }
});
export default ClaimResponseSubDetailComponent;
