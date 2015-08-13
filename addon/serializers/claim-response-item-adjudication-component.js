import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimResponseItemAdjudicationComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				amount : {embedded: 'always'},
				value : {embedded: 'always'}
    }
});
export default ClaimResponseItemAdjudicationComponent;
