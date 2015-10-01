import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TimingRepeatComponent = ApplicationSerializer.extend({
    attrs:{
        boundsDuration : {embedded: 'always'},
				boundsRange : {embedded: 'always'},
				boundsPeriod : {embedded: 'always'},
				count : {embedded: 'always'},
				duration : {embedded: 'always'},
				durationMax : {embedded: 'always'},
				frequency : {embedded: 'always'},
				frequencyMax : {embedded: 'always'},
				period : {embedded: 'always'},
				periodMax : {embedded: 'always'}
    }
});
export default TimingRepeatComponent;
