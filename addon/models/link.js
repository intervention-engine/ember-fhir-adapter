// Generated by CoffeeScript 1.9.3
import DS from 'ember-data';
var Link;

Link = DS.Model.extend({
  other: DS.belongsTo('reference'),
  type: DS.attr('string')
});

export default Link;