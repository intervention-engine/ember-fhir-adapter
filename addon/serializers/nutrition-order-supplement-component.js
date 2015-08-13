import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var NutritionOrderSupplementComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				schedule : {embedded: 'always'},
				quantity : {embedded: 'always'}
    }
});
export default NutritionOrderSupplementComponent;
