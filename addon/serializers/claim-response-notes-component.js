import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimResponseNotesComponent = ApplicationSerializer.extend({
    attrs:{
        number : {embedded: 'always'},
				type : {embedded: 'always'}
    }
});
export default ClaimResponseNotesComponent;
