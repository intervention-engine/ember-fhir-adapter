import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimMissingTeethComponent = ApplicationSerializer.extend({
    attrs:{
        tooth : {embedded: 'always'},
				reason : {embedded: 'always'}
    }
});
export default ClaimMissingTeethComponent;
