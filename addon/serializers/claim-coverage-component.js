import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimCoverageComponent = ApplicationSerializer.extend({
    attrs:{
        sequence : {embedded: 'always'},
				coverage : {embedded: 'always'},
				relationship : {embedded: 'always'},
				claimResponse : {embedded: 'always'},
				originalRuleset : {embedded: 'always'}
    }
});
export default ClaimCoverageComponent;
