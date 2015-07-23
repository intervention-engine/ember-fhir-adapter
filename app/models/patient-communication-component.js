import DS from 'ember-data';

var PatientCommunicationComponent = DS.Model.extend({
    language: DS.belongsTo('codeable-concept', {embedded: true}),
    preferred: DS.attr('boolean')
});
export default PatientCommunicationComponent;
