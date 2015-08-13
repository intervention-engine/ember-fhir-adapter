import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var CarePlanActivityDetailComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				reasonCodeableConcept : {embedded: 'always'},
				goal : {embedded: 'always'},
				statusReason : {embedded: 'always'},
				scheduledTiming : {embedded: 'always'},
				location : {embedded: 'always'},
				performer : {embedded: 'always'},
				product : {embedded: 'always'},
				dailyAmount : {embedded: 'always'},
				quantity : {embedded: 'always'}
    }
});
export default CarePlanActivityDetailComponent;
