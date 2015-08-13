import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimPayeeComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'},
				provider : {embedded: 'always'},
				organization : {embedded: 'always'},
				person : {embedded: 'always'}
    }
});
export default ClaimPayeeComponent;
