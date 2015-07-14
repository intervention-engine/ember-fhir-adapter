import DS from 'ember-data';
var Query;

Query = DS.Model.extend({
  identifier: DS.attr('string'),
  parameter: DS.hasMany('extension'),
  response: DS.belongsTo('response')
});

export default Query;
