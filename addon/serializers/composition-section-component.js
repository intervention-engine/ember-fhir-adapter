import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var CompositionSectionComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				content : {embedded: 'always'},
				section : {embedded: 'always'}
    }
});
export default CompositionSectionComponent;
