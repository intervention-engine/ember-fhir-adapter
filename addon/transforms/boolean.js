import DS from 'ember-data'; 

export default DS.BooleanTransform.extend({
  deserialize: function(serialized) {
    if (serialized === null || serialized === undefined) {
      return null;
    }
    return this._super(serialized);
  },

  serialize: function(deserialized) {
    if (deserialized === null || deserialized === undefined) {
      return null;
    }
    return this._super(deserialized);
  }
});