import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImplementationGuideGlobalComponent = ApplicationSerializer.extend({
    attrs:{
        profile : {embedded: 'always'}
    }
});
export default ImplementationGuideGlobalComponent;
