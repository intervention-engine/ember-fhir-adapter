import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProcedurePerformerComponent = ApplicationSerializer.extend({
    attrs:{
        actor : {embedded: 'always'},
				role : {embedded: 'always'}
    }
});
export default ProcedurePerformerComponent;
