import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ElementDefinitionBaseComponent = ApplicationSerializer.extend({
    attrs:{
        min : {embedded: 'always'}
    }
});
export default ElementDefinitionBaseComponent;
