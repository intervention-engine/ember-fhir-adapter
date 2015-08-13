import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var OrderWhenComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				schedule : {embedded: 'always'}
    }
});
export default OrderWhenComponent;
