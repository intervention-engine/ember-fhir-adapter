import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ContractActorComponent = ApplicationSerializer.extend({
    attrs:{
        entity : {embedded: 'always'},
				role : {embedded: 'always'}
    }
});
export default ContractActorComponent;
