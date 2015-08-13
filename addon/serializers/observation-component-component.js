import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ObservationComponentComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				valueQuantity : {embedded: 'always'},
				valueCodeableConcept : {embedded: 'always'},
				valueRange : {embedded: 'always'},
				valueRatio : {embedded: 'always'},
				valueSampledData : {embedded: 'always'},
				valueAttachment : {embedded: 'always'},
				valueTime : {embedded: 'always'},
				valuePeriod : {embedded: 'always'},
				dataAbsentReason : {embedded: 'always'},
				referenceRange : {embedded: 'always'}
    }
});
export default ObservationComponentComponent;
