import DS from 'ember-data';

var ImagingStudySeriesInstanceComponent = DS.Model.extend({
    number: DS.attr('number'),
    uid: DS.attr('string'),
    sopclass: DS.attr('string'),
    type: DS.attr('string'),
    title: DS.attr('string'),
    content: DS.hasMany('attachment', {embedded: true})
});
export default ImagingStudySeriesInstanceComponent;
