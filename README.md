# Ember-fhir-adapter

The Ember on FHIR Adapter is designed to make interacting with FHIR servers from your Ember front end.

As of 0.0.11 this adapter ships with models and serializers for all resources in FHIR DSTU2.1, if you require DSTU2 you can use 0.0.10

As of 2.0.0 this adapter now supports the new Ember Data serializer API which should make keeping up with Ember Data releases simpler. There should no longer be any deprecation notices coming from inside the adapter. 

# Installing Ember-fhir-adapter with Ember CLI

To install Ember-fhir-adapter as an addon for your Ember CLI application, run the following command in the app's directory:

```
$ ember install ember-fhir-adapter
```

This will add Ember-fhir-adapter as a dependency in your ```bower.json```.

This adapter is built to operate with DSTU2.1 compliant servers due to the bundling of models. 
