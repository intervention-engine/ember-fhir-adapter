import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var PaymentReconciliationDetailsComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				request : {embedded: 'always'},
				responce : {embedded: 'always'},
				submitter : {embedded: 'always'},
				payee : {embedded: 'always'},
				amount : {embedded: 'always'}
    }
});
export default PaymentReconciliationDetailsComponent;
