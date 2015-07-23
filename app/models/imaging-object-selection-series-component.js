import DS from 'ember-data';

var ImagingObjectSelectionSeriesComponent = DS.Model.extend({
    uid: DS.attr('string'),
    url: DS.attr('string'),
    instance:  DS.hasMany('imaging-object-selection-instance-component', {embedded: true})
});
export default ImagingObjectSelectionSeriesComponent;
