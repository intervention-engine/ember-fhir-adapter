import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClinicalImpressionRuledOutComponent = ApplicationSerializer.extend({
    attrs:{
        item : {embedded: 'always'}
    }
});
export default ClinicalImpressionRuledOutComponent;
