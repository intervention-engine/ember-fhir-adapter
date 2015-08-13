import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var StructureDefinitionDifferentialComponent = ApplicationSerializer.extend({
    attrs:{
        element : {embedded: 'always'}
    }
});
export default StructureDefinitionDifferentialComponent;
