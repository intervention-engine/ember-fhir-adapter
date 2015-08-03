import DS from 'ember-data';

var PatientLinkComponent = DS.Model.extend({
    other: DS.belongsTo('reference', {embedded: true}),
    type: DS.attr('string')
});
export default PatientLinkComponent;
