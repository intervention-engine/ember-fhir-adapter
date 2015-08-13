import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ElementDefinitionConstraintComponent = ApplicationSerializer.extend({
    attrs:{
        key : {embedded: 'always'}
    }
});
export default ElementDefinitionConstraintComponent;
