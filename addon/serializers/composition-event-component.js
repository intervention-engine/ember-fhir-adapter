import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var CompositionEventComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				period : {embedded: 'always'},
				detail : {embedded: 'always'}
    }
});
export default CompositionEventComponent;
