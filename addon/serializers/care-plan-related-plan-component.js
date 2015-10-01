import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var CarePlanRelatedPlanComponent = ApplicationSerializer.extend({
    attrs:{
        plan : {embedded: 'always'}
    }
});
export default CarePlanRelatedPlanComponent;
