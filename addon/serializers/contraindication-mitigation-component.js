import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ContraindicationMitigationComponent = ApplicationSerializer.extend({
    attrs:{
        action : {embedded: 'always'},
				author : {embedded: 'always'}
    }
});
export default ContraindicationMitigationComponent;
