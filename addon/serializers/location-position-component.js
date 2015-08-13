import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var LocationPositionComponent = ApplicationSerializer.extend({
    attrs:{
        longitude : {embedded: 'always'},
				latitude : {embedded: 'always'},
				altitude : {embedded: 'always'}
    }
});
export default LocationPositionComponent;
