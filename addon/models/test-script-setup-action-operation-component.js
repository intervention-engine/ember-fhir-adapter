import DS from 'ember-data';

var TestScriptSetupActionOperationComponent = DS.Model.extend({
    type: DS.belongsTo('coding', {embedded: true}),
    resource: DS.attr('string'),
    label: DS.attr('string'),
    description: DS.attr('string'),
    accept: DS.attr('string'),
    contentType: DS.attr('string'),
    destination: DS.attr('number'),
    encodeRequestUrl: DS.attr('boolean'),
    params: DS.attr('string'),
    requestHeader:  DS.hasMany('test-script-setup-action-operation-request-header-component', {embedded: true}),
    responseId: DS.attr('string'),
    sourceId: DS.attr('string'),
    targetId: DS.attr('string'),
    url: DS.attr('string')
});
export default TestScriptSetupActionOperationComponent;
