import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ObservationComponentComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				valueQuantity : {embedded: 'always'},
				dataAbsentReason : {embedded: 'always'},
				referenceRange : {embedded: 'always'}
    }
});
export default ObservationComponentComponent;
