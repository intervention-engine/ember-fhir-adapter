import DS from 'ember-data';

var ImagingObjectSelectionInstanceComponent = DS.Model.extend({
    sopClass: DS.attr('string'),
    uid: DS.attr('string'),
    url: DS.attr('string'),
    frames:  DS.hasMany('imaging-object-selection-frames-component', {embedded: true})
});
export default ImagingObjectSelectionInstanceComponent;
