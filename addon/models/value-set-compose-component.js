import DS from 'ember-data';

var ValueSetComposeComponent = DS.Model.extend({
    import: DS.attr('string'),
    include:  DS.hasMany('value-set-concept-set-component', {embedded: true}),
    exclude: DS.hasMany('value-set-concept-set-component', {embedded: true})
});
export default ValueSetComposeComponent;
