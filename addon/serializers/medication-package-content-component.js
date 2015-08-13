import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var MedicationPackageContentComponent = ApplicationSerializer.extend({
    attrs:{
        item : {embedded: 'always'},
				amount : {embedded: 'always'}
    }
});
export default MedicationPackageContentComponent;
