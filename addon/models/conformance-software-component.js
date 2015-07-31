import DS from 'ember-data';

var ConformanceSoftwareComponent = DS.Model.extend({
    name: DS.attr('string'),
    version: DS.attr('string'),
    releaseDate: DS.attr('date')
});
export default ConformanceSoftwareComponent;
