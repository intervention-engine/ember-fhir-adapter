import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ImmunizationReactionComponent = ApplicationSerializer.extend({
    attrs:{
        detail : {embedded: 'always'}
    }
});
export default ImmunizationReactionComponent;
