import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var PractitionerQualificationComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				code : {embedded: 'always'},
				period : {embedded: 'always'},
				issuer : {embedded: 'always'}
    }
});
export default PractitionerQualificationComponent;
