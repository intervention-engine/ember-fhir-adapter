import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ElementDefinitionBindingComponent = ApplicationSerializer.extend({
    attrs:{
        valueSetUri : {embedded: 'always'}
    }
});
export default ElementDefinitionBindingComponent;
