import * as Jobs from './Jobs';

export default [{
    'name': 'theIdeabox',
    'fastDescription': 'Création d\'une plateforme à idées',
    'description': 'Le but est de créer une plate forme pour que les gens puissent déposer des idées.\nCelà permettrait de faire des trucs cools et blablabla.',
    'currentMembers': [{
        'name': 'John Black',
        'job': Jobs.Programmeur
    }, {
        'name': 'Aamu Lumi',
        'job': Jobs.ChargeProjet
    }],
    'requiredJobs': [Jobs.Graphiste, Jobs.AdminSysteme],
    'budget': 50,
    'isPrivate': false,
    'id': '0'
},{
    'name': 'Lampadouille',
    'fastDescription': 'Création d\'un lampadaire high-tech',
    'description': 'Je souhaiterais faire un super lampadaire et tout.',
    'currentMembers': [{
        'name': 'John Black',
        'job': Jobs.Programmeur
    }],
    'requiredJobs': [Jobs.Graphiste, Jobs.AdminReseau],
    'budget': 2000,
    'isPrivate': true,
    'id': '1'
}];
