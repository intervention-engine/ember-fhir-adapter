import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationProductComponent = ApplicationSerializer.extend({
    attrs:{
        form : {embedded: 'always'},
				ingredient:  {embedded: 'always'},
				batch:  {embedded: 'always'}
    }
});
export default MedicationProductComponent;
