import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImplementationGuidePageComponent = ApplicationSerializer.extend({
    attrs:{
        source : {embedded: 'always'},
				page : {embedded: 'always'}
    }
});
export default ImplementationGuidePageComponent;
