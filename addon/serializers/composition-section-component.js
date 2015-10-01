import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var CompositionSectionComponent = ApplicationSerializer.extend({
    attrs:{
        code : {embedded: 'always'},
				text : {embedded: 'always'},
				orderedBy : {embedded: 'always'},
				entry : {embedded: 'always'},
				emptyReason : {embedded: 'always'},
				section : {embedded: 'always'}
    }
});
export default CompositionSectionComponent;
