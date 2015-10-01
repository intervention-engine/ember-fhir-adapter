import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var AllergyIntoleranceReactionComponent = ApplicationSerializer.extend({
    attrs:{
        substance : {embedded: 'always'},
				manifestation : {embedded: 'always'},
				exposureRoute : {embedded: 'always'},
				note : {embedded: 'always'}
    }
});
export default AllergyIntoleranceReactionComponent;
