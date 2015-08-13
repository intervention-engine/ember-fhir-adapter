import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ValueSetExpansionParameterComponent = ApplicationSerializer.extend({
    attrs:{
        valueInteger : {embedded: 'always'}
    }
});
export default ValueSetExpansionParameterComponent;
