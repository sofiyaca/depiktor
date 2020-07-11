const queryTerms = {
  Platforms: ['Linux', 'Windows', 'Docker', 'AWS'],

  Languages: ['JavaScript', 'HTML', 'CSS', 'SQL', 'Python'],

  Databases: ['MySQL', 'PostgreSQL', 'Microsoft SQL Server', 'SQLite'],

  'Other Tools': ['Node.js', 'NET Core', 'Pandas', 'React Native'],
};

const longQueryTerms = {
  languages: [
    'JavaScript',
    'HTML/CSS',
    'SQL',
    'Python',
    'Java',
    'Bash',
    'C#',
    'TypeScript',
    'PHP',
    'C++',
  ],

  otherTools: [
    'Nodejs',
    '.NET',
    '.NET Core',
    'Pandas',
    'React Native',
    'TensorFlow',
    'Unity 3D',
    'Ansible',
    'Teraform',
    'Flutter',
  ],

  databases: [
    'MySQL',
    'PostgreSQL',
    'Microsoft SQL Server',
    'SQLite',
    'MongoDB',
    'Redis',
    'MariaDB',
    'Oracle',
    'Elasticsearch',
    'Firebase',
  ],

  platforms: [
    'Linux',
    'Windows',
    'Docker',
    'AWS',
    'MacOS',
    'Android',
    'Microsoft Azure',
    'Google Cloud Platform',
    'Raspberry Pi',
    'WordPress',
  ],
};

module.exports = { queryTerms, longQueryTerms };
