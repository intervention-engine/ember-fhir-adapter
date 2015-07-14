import DS from 'ember-data';
var Timing;

Timing =  DS.Model.extend({
    event: DS.attr('date'),
    repeat: DS.belongsTo('timing-repeat', {embedded: 'always'}),
    code: DS.belongsTo('codeable-concept', {embedded: 'always'})
});

export default Timing;
