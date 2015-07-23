import DS from 'ember-data';

var SpecimenTreatmentComponent = DS.Model.extend({
    description: DS.attr('string'),
    procedure: DS.belongsTo('codeable-concept', {embedded: true}),
    additive: DS.hasMany('reference', {embedded: true})
});
export default SpecimenTreatmentComponent;
