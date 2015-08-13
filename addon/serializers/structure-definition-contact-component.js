import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var StructureDefinitionContactComponent = ApplicationSerializer.extend({
    attrs:{
        telecom : {embedded: 'always'}
    }
});
export default StructureDefinitionContactComponent;
