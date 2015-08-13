import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var CompositionAttesterComponent = ApplicationSerializer.extend({
    attrs:{
        party : {embedded: 'always'}
    }
});
export default CompositionAttesterComponent;
