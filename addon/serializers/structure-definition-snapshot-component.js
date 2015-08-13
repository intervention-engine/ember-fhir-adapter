import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var StructureDefinitionSnapshotComponent = ApplicationSerializer.extend({
    attrs:{
        element : {embedded: 'always'}
    }
});
export default StructureDefinitionSnapshotComponent;
