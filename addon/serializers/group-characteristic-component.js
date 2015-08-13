import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var GroupCharacteristicComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				valueCodeableConcept : {embedded: 'always'}
    }
});
export default GroupCharacteristicComponent;
