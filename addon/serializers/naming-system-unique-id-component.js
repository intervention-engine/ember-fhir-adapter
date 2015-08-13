import ApplicationSerializer from 'ember-fhir-adapter/serializers/application';

var NamingSystemUniqueIdComponent = ApplicationSerializer.extend({
    attrs:{
        period : {embedded: 'always'}
    }
});
export default NamingSystemUniqueIdComponent;
