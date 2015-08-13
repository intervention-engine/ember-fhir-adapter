import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClinicalImpressionFindingComponent = ApplicationSerializer.extend({
    attrs:{
        item : {embedded: 'always'}
    }
});
export default ClinicalImpressionFindingComponent;
