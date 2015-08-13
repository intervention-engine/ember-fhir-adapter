import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var PersonLinkComponent = ApplicationSerializer.extend({
    attrs:{
        target : {embedded: 'always'}
    }
});
export default PersonLinkComponent;
