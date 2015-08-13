import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimResponseErrorsComponent = ApplicationSerializer.extend({
    attrs:{
        sequenceLinkId : {embedded: 'always'},
				detailSequenceLinkId : {embedded: 'always'},
				subdetailSequenceLinkId : {embedded: 'always'},
				code : {embedded: 'always'}
    }
});
export default ClaimResponseErrorsComponent;
