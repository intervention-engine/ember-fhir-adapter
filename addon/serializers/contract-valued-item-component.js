import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ContractValuedItemComponent = ApplicationSerializer.extend({
    attrs:{
        entityCodeableConcept : {embedded: 'always'},
				entityReference : {embedded: 'always'},
				identifier : {embedded: 'always'},
				quantity : {embedded: 'always'},
				unitPrice : {embedded: 'always'},
				factor : {embedded: 'always'},
				points : {embedded: 'always'},
				net : {embedded: 'always'}
    }
});
export default ContractValuedItemComponent;
