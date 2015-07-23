import DS from 'ember-data';

var LocationPositionComponent = DS.Model.extend({
    longitude: DS.attr('number'),
    latitude: DS.attr('number'),
    altitude: DS.attr('number')
});
export default LocationPositionComponent;
