import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationProductIngredientComponent = ApplicationSerializer.extend({
    attrs:{
        item : {embedded: 'always'},
				amount : {embedded: 'always'}
    }
});
export default MedicationProductIngredientComponent;
