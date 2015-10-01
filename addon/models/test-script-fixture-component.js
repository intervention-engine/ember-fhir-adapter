import DS from 'ember-data';

var TestScriptFixtureComponent = DS.Model.extend({
    autocreate: DS.attr('boolean'),
    autodelete: DS.attr('boolean'),
    resource: DS.belongsTo('reference', {embedded: true})
});
export default TestScriptFixtureComponent;
