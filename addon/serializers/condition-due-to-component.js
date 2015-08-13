import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ConditionDueToComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				target : {embedded: 'always'}
    }
});
export default ConditionDueToComponent;
