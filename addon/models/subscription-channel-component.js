import DS from 'ember-data';

var SubscriptionChannelComponent = DS.Model.extend({
    type: DS.attr('string'),
    endpoint: DS.attr('string'),
    payload: DS.attr('string'),
    header: DS.attr('string')
});
export default SubscriptionChannelComponent;
