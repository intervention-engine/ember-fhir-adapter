import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var QuestionnaireResponseGroupComponent = ApplicationSerializer.extend({
    attrs:{
        subject : {embedded: 'always'},
				group : {embedded: 'always'},
				question:  {embedded: 'always'}
    }
});
export default QuestionnaireResponseGroupComponent;
