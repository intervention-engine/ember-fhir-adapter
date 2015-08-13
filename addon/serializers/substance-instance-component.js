import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var SubstanceInstanceComponent = ApplicationSerializer.extend({
    attrs:{
        identifier : {embedded: 'always'},
				quantity : {embedded: 'always'}
    }
});
export default SubstanceInstanceComponent;
