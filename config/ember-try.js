module.exports = {
  scenarios: [
    {
      name: 'Ember 1.13 with ember-data',
      dependencies: {
        'ember': '1.13.0',
        'ember-data': '1.13.0'
      }
    },
    {
      name: 'Ember canary',
      dependencies: {
        'ember': 'canary',
        'ember-data':'canary'
      }
    },
    {
      name: 'Ember beta',
      dependencies: {
        'ember': 'components/ember#beta',
        'ember-data': 'components/ember-data#beta'
      }
    }
  ]
};
