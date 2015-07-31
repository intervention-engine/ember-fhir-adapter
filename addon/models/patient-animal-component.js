import DS from 'ember-data';

var PatientAnimalComponent = DS.Model.extend({
    species: DS.belongsTo('codeable-concept', {embedded: true}),
    breed: DS.belongsTo('codeable-concept', {embedded: true}),
    genderStatus: DS.belongsTo('codeable-concept', {embedded: true})
});
export default PatientAnimalComponent;
