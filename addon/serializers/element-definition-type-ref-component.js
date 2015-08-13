import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ElementDefinitionTypeRefComponent = ApplicationSerializer.extend({
    attrs:{
        profile : {embedded: 'always'}
    }
});
export default ElementDefinitionTypeRefComponent;
