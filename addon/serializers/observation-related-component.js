import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ObservationRelatedComponent = ApplicationSerializer.extend({
    attrs:{
        target : {embedded: 'always'}
    }
});
export default ObservationRelatedComponent;
