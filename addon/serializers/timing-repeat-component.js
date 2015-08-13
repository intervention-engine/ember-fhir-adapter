import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var TimingRepeatComponent = ApplicationSerializer.extend({
    attrs:{
        bounds : {embedded: 'always'},
				count : {embedded: 'always'},
				duration : {embedded: 'always'},
				frequency : {embedded: 'always'},
				frequencyMax : {embedded: 'always'},
				period : {embedded: 'always'},
				periodMax : {embedded: 'always'}
    }
});
export default TimingRepeatComponent;
