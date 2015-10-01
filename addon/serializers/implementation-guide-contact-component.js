import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImplementationGuideContactComponent = ApplicationSerializer.extend({
    attrs:{
        telecom : {embedded: 'always'}
    }
});
export default ImplementationGuideContactComponent;
