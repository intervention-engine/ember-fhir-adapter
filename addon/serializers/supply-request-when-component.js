import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var SupplyRequestWhenComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				schedule : {embedded: 'always'}
    }
});
export default SupplyRequestWhenComponent;
