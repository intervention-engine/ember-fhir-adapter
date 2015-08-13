import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var QuestionnaireAnswersGroupComponent = ApplicationSerializer.extend({
    attrs:{
        subject : {embedded: 'always'},
				group : {embedded: 'always'},
				question:  {embedded: 'always'}
    }
});
export default QuestionnaireAnswersGroupComponent;
