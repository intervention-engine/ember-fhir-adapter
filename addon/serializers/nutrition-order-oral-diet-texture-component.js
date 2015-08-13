import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var NutritionOrderOralDietTextureComponent = ApplicationSerializer.extend({
    attrs:{
        modifier : {embedded: 'always'},
				foodType : {embedded: 'always'}
    }
});
export default NutritionOrderOralDietTextureComponent;
