import DS from 'ember-data';

var StructureDefinitionSnapshotComponent = DS.Model.extend({
    element: DS.hasMany('element-definition', {embedded: true})
});
export default StructureDefinitionSnapshotComponent;
