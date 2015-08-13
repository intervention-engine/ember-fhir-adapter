import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationPackageComponent = ApplicationSerializer.extend({
    attrs:{
        container : {embedded: 'always'},
				content:  {embedded: 'always'}
    }
});
export default MedicationPackageComponent;
