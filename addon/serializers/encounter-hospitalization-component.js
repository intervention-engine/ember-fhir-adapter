import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var EncounterHospitalizationComponent = ApplicationSerializer.extend({
    attrs:{
        preAdmissionIdentifier : {embedded: 'always'},
				origin : {embedded: 'always'},
				admitSource : {embedded: 'always'},
				admittingDiagnosis : {embedded: 'always'},
				reAdmission : {embedded: 'always'},
				dietPreference : {embedded: 'always'},
				specialCourtesy : {embedded: 'always'},
				specialArrangement : {embedded: 'always'},
				destination : {embedded: 'always'},
				dischargeDisposition : {embedded: 'always'},
				dischargeDiagnosis : {embedded: 'always'}
    }
});
export default EncounterHospitalizationComponent;
