import DS from 'ember-data';

var CommunicationRequestPayloadComponent = DS.Model.extend({
    contentString: DS.attr('string'),
    contentAttachment: DS.belongsTo('attachment', {embedded: true}),
    contentReference: DS.belongsTo('reference', {embedded: true})
});
export default CommunicationRequestPayloadComponent;
