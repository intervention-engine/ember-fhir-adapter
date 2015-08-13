import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var SpecimenTreatmentComponent = ApplicationSerializer.extend({
    attrs:{
        procedure : {embedded: 'always'},
				additive : {embedded: 'always'}
    }
});
export default SpecimenTreatmentComponent;
