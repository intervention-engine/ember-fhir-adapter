import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var GroupCharacteristicComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				valueCodeableConcept : {embedded: 'always'},
				valueQuantity : {embedded: 'always'},
				valueRange : {embedded: 'always'},
				period : {embedded: 'always'}
    }
});
export default GroupCharacteristicComponent;
