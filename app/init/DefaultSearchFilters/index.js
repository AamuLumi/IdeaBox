'use strict';

export default {
  'activeFilters': [{
    'name': 'Le projet est',
    'type': 'Values',
    'id': 'projectType',
    'values' : [
      'Communautaire', 'Privé'
    ]
  }],
  'inactiveFilters': [{
    'name': 'Je suis ...',
    'type': 'String',
    'id': 'job'
  }, {
    'name': 'Je cherche un projet nommé ...',
    'type': 'String',
    'id': 'projectName'
  }, {
    'name': 'Le domaine du projet est ...',
    'type': 'String',
    'id': 'projectDomain'
  }, {
    'name': 'Le projet nécessite un budget ...',
    'type': 'Values',
    'values': [
      'faible', 'moyen', 'élevé'
    ],
    'id': 'projectBudget'
  }, {
    'name': 'Je veux être ...',
    'type': 'String',
    'id': 'jobSearched'
  }, {
    'name': 'Le projet a été posté ...',
    'type': 'Values',
    'values': [
      'Moins de 15 jours', 'Moins d\'un mois',
      'Moins de trois mois'
    ],
    'id': 'projectPosted'
  }]
};
