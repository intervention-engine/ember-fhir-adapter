import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var PaymentReconciliationNotesComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'}
    }
});
export default PaymentReconciliationNotesComponent;
