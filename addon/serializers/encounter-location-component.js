import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var EncounterLocationComponent = ApplicationSerializer.extend({
    attrs:{
        location : {embedded: 'always'},
				period : {embedded: 'always'}
    }
});
export default EncounterLocationComponent;
