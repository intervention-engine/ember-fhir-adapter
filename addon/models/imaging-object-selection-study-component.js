import DS from 'ember-data';

var ImagingObjectSelectionStudyComponent = DS.Model.extend({
    uid: DS.attr('string'),
    url: DS.attr('string'),
    imagingStudy: DS.belongsTo('reference', {embedded: true}),
    series:  DS.hasMany('imaging-object-selection-series-component', {embedded: true})
});
export default ImagingObjectSelectionStudyComponent;
