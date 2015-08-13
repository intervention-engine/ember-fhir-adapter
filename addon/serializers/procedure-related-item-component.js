import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProcedureRelatedItemComponent = ApplicationSerializer.extend({
    attrs:{
        target : {embedded: 'always'}
    }
});
export default ProcedureRelatedItemComponent;
