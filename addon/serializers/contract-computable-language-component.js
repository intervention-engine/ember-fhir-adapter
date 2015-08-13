import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ContractComputableLanguageComponent = ApplicationSerializer.extend({
    attrs:{
        contentAttachment : {embedded: 'always'},
				contentReference : {embedded: 'always'}
    }
});
export default ContractComputableLanguageComponent;
