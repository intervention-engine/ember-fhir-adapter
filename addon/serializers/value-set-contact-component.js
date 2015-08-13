import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetContactComponent = ApplicationSerializer.extend({
    attrs:{
        telecom : {embedded: 'always'}
    }
});
export default ValueSetContactComponent;
