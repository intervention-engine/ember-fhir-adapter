import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var CarePlanParticipantComponent = ApplicationSerializer.extend({
    attrs:{
        role : {embedded: 'always'},
				member : {embedded: 'always'}
    }
});
export default CarePlanParticipantComponent;
