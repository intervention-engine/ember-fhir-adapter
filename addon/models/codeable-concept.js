// Generated by CoffeeScript 1.9.3
import DS from 'ember-data';
var CodeableConcept;

CodeableConcept = DS.Model.extend({
  coding: DS.hasMany('coding'),
  text: DS.attr('string'),
  toString: function() {
    return this.get('text') || this.get('coding').map(function(code) {
      return code.toString();
    }).join();
  },
  hasCode: function(code) {
    var matchedCodes;
    matchedCodes = this.get('coding').map(function(c) {
      return c.get('system') === code.system && c.get('code') === code.code;
    });
    return matchedCodes.any(function(d) {
      return d;
    });
  }
});

export default CodeableConcept;
