import DS from 'ember-data';

var MedicationProductBatchComponent = DS.Model.extend({
    lotNumber: DS.attr('string'),
    expirationDate: DS.attr('date')
});
export default MedicationProductBatchComponent;
