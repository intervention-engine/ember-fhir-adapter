import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var DocumentReferenceContextComponent = ApplicationSerializer.extend({
    attrs:{
        encounter : {embedded: 'always'},
				event : {embedded: 'always'},
				period : {embedded: 'always'},
				facilityType : {embedded: 'always'},
				practiceSetting : {embedded: 'always'},
				sourcePatientInfo : {embedded: 'always'},
				related:  {embedded: 'always'}
    }
});
export default DocumentReferenceContextComponent;
