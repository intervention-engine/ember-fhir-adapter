import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var AllergyIntoleranceEventComponent = ApplicationSerializer.extend({
    attrs:{
        substance : {embedded: 'always'},
				manifestation : {embedded: 'always'},
				duration : {embedded: 'always'},
				exposureRoute : {embedded: 'always'}
    }
});
export default AllergyIntoleranceEventComponent;
