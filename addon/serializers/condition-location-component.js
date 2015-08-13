import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConditionLocationComponent = ApplicationSerializer.extend({
    attrs:{
        siteCodeableConcept : {embedded: 'always'}
    }
});
export default ConditionLocationComponent;
