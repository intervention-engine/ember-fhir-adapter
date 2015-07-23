import DS from 'ember-data';

var NamingSystemUniqueIdComponent = DS.Model.extend({
    type: DS.attr('string'),
    value: DS.attr('string'),
    preferred: DS.attr('boolean'),
    period: DS.belongsTo('period', {embedded: true})
});
export default NamingSystemUniqueIdComponent;
