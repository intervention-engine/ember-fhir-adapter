import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ContractFriendlyLanguageComponent = ApplicationSerializer.extend({
    attrs:{
        contentAttachment : {embedded: 'always'}
    }
});
export default ContractFriendlyLanguageComponent;
