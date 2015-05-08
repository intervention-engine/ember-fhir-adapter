import Adapter from '../adapters/application';
import Serializer from '../serializers/application';

export default {
  name: "ember-fhir",

  initialize: function( container, app){
    console.log("TEST");
    container.register( 'adapter:-fhir', Adapter)
    container.register( 'serializer:-fhir', Serializer)

    DS.FHIRAdapter = Adapter;
    DS.FHIRSerializer = Serializer;
  }
}
