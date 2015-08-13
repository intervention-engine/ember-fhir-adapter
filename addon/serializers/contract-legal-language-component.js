import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ContractLegalLanguageComponent = ApplicationSerializer.extend({
    attrs:{
        contentAttachment : {embedded: 'always'}
    }
});
export default ContractLegalLanguageComponent;
