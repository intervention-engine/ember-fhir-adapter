import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var NamingSystemContactComponent = ApplicationSerializer.extend({
    attrs:{
        telecom : {embedded: 'always'}
    }
});
export default NamingSystemContactComponent;
