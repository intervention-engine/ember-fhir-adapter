import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ContractSignatoryComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				party : {embedded: 'always'}
    }
});
export default ContractSignatoryComponent;
