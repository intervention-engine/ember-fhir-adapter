import DS from 'ember-data';

var ListEntryComponent = DS.Model.extend({
    flag: DS.hasMany('codeable-concept', {embedded: true}),
    deleted: DS.attr('boolean'),
    date: DS.attr('date'),
    item: DS.belongsTo('reference', {embedded: true})
});
export default ListEntryComponent;
