import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var VisionPrescriptionDispenseComponent = ApplicationSerializer.extend({
    attrs:{
        product : {embedded: 'always'},
				sphere : {embedded: 'always'},
				cylinder : {embedded: 'always'},
				axis : {embedded: 'always'},
				prism : {embedded: 'always'},
				add : {embedded: 'always'},
				power : {embedded: 'always'},
				backCurve : {embedded: 'always'},
				diameter : {embedded: 'always'},
				duration : {embedded: 'always'}
    }
});
export default VisionPrescriptionDispenseComponent;
