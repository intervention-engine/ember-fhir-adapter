// Generated by CoffeeScript 1.9.3
import DS from 'ember-data';
var Participant;

Participant = DS.Model.extend({
  type: DS.hasMany('codeable-concept'),
  individual: DS.belongsTo('resource-reference')
});

export default Participant;
