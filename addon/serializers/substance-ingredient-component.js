import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var SubstanceIngredientComponent = ApplicationSerializer.extend({
    attrs:{
        quantity : {embedded: 'always'},
				substance : {embedded: 'always'}
    }
});
export default SubstanceIngredientComponent;
