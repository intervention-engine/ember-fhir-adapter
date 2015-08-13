import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var NutritionOrderEnteralFormulaComponent = ApplicationSerializer.extend({
    attrs:{
        baseFormulaType : {embedded: 'always'},
				additiveType : {embedded: 'always'},
				caloricDensity : {embedded: 'always'},
				routeofAdministration : {embedded: 'always'},
				administration:  {embedded: 'always'},
				maxVolumeToDeliver : {embedded: 'always'}
    }
});
export default NutritionOrderEnteralFormulaComponent;
