import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var NutritionOrderEnteralFormulaAdministrationComponent = ApplicationSerializer.extend({
    attrs:{
        schedule : {embedded: 'always'},
				quantity : {embedded: 'always'},
				rateQuantity : {embedded: 'always'}
    }
});
export default NutritionOrderEnteralFormulaAdministrationComponent;
