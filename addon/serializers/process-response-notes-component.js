import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ProcessResponseNotesComponent = ApplicationSerializer.extend({
    attrs:{
        type : {embedded: 'always'}
    }
});
export default ProcessResponseNotesComponent;
