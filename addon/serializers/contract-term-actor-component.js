import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ContractTermActorComponent = ApplicationSerializer.extend({
    attrs:{
        entity : {embedded: 'always'},
				role : {embedded: 'always'}
    }
});
export default ContractTermActorComponent;
