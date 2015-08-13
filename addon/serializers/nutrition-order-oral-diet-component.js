import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var NutritionOrderOralDietComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				schedule : {embedded: 'always'},
				nutrient:  {embedded: 'always'},
				texture:  {embedded: 'always'},
				fluidConsistencyType : {embedded: 'always'}
    }
});
export default NutritionOrderOralDietComponent;
