import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClinicalImpressionInvestigationsComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				item : {embedded: 'always'}
    }
});
export default ClinicalImpressionInvestigationsComponent;
