import DS from 'ember-data';

var TestScriptFixtureComponent = DS.Model.extend({
    uri: DS.attr('string'),
    resource: DS.attr('interface{}'),
    autocreate: DS.attr('boolean'),
    autodelete: DS.attr('boolean')
});
export default TestScriptFixtureComponent;
