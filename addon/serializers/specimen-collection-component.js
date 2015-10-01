import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var SpecimenCollectionComponent = ApplicationSerializer.extend({
    attrs:{
        collector : {embedded: 'always'},
				collectedPeriod : {embedded: 'always'},
				quantity : {embedded: 'always'},
				method : {embedded: 'always'},
				bodySite : {embedded: 'always'}
    }
});
export default SpecimenCollectionComponent;
