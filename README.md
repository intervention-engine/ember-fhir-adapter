# Ember-fhir-adapter

The Ember on FHIR Adapter is designed to make interacting with FHIR servers from your Ember front end.

As of 0.0.11 this adapter ships with models and serializers for all resources in FHIR DSTU2.1, if you require DSTU2 you can use 0.0.10

Also, there are deprecation warnings if you use this with Ember 1.13.x, and this has not been tested with Ember 2.x.x if you are using 2.x.x and this works, let me know. If you require 2.x.x and this doesn't work please let me know with an issue. 

# Installing Ember-fhir-adapter with Ember CLI

To install Ember-fhir-adapter as an addon for your Ember CLI application, run the following command in the app's directory:

```
$ ember install ember-fhir-adapter
```

This will add Ember-fhir-adapter as a dependency in your ```bower.json```.

This adapter is built to operate with DSTU2 compliant servers.




This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
