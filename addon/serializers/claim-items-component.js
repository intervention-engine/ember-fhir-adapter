import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var ClaimItemsComponent = ApplicationSerializer.extend({
    attrs:{
        sequence : {embedded: 'always'},
				type : {embedded: 'always'},
				provider : {embedded: 'always'},
				diagnosisLinkId : {embedded: 'always'},
				service : {embedded: 'always'},
				quantity : {embedded: 'always'},
				unitPrice : {embedded: 'always'},
				factor : {embedded: 'always'},
				points : {embedded: 'always'},
				net : {embedded: 'always'},
				udi : {embedded: 'always'},
				bodySite : {embedded: 'always'},
				subSite : {embedded: 'always'},
				modifier : {embedded: 'always'},
				detail:  {embedded: 'always'},
				prosthesis:  {embedded: 'always'}
    }
});
export default ClaimItemsComponent;
