import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var CarePlanActivityComponent = ApplicationSerializer.extend({
    attrs:{
        actionResulting : {embedded: 'always'},
				reference : {embedded: 'always'},
				detail:  {embedded: 'always'}
    }
});
export default CarePlanActivityComponent;
