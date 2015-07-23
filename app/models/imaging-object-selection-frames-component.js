import DS from 'ember-data';

var ImagingObjectSelectionFramesComponent = DS.Model.extend({
    frameNumbers: DS.attr('number'),
    url: DS.attr('string')
});
export default ImagingObjectSelectionFramesComponent;
