import DS from 'ember-data';

var StructureDefinitionDifferentialComponent = DS.Model.extend({
    element: DS.hasMany('element-definition', {embedded: true})
});
export default StructureDefinitionDifferentialComponent;
