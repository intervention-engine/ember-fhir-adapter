import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var NutritionOrderOralDietNutrientComponent = ApplicationSerializer.extend({
    attrs:{
        modifier : {embedded: 'always'},
				amount : {embedded: 'always'}
    }
});
export default NutritionOrderOralDietNutrientComponent;
