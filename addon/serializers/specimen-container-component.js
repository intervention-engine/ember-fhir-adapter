import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var SpecimenContainerComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				type : {embedded: 'always'},
				capacity : {embedded: 'always'},
				specimenQuantity : {embedded: 'always'},
				additiveCodeableConcept : {embedded: 'always'},
				additiveReference : {embedded: 'always'}
    }
});
export default SpecimenContainerComponent;
