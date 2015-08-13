import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ObservationReferenceRangeComponent = ApplicationSerializer.extend({
    attrs:{
        low : {embedded: 'always'},
				high : {embedded: 'always'},
				meaning : {embedded: 'always'},
				age : {embedded: 'always'}
    }
});
export default ObservationReferenceRangeComponent;
