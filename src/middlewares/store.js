export default {
  name: '',
  surname: '',
  // url: 'http://localhost:8080',
  // url: 'https://prettyprinted-tm-backend.herokuapp.com',
  url: 'https://pp-taskmanager-backend.herokuapp.com',
  attributes: {
    priority: {
      0: { name: 'Minor', style: '#ACCCF1' },
      1: { name: 'Normal', style: '#ACF1AF' },
      2: { name: 'Major', style: '#F0ACF1' },
      3: { name: 'Critical', style: '#F1ACAC' },
    },
    type: {
      0: { name: 'Bug', style: '#F1ACAC' },
      1: { name: 'Feature', style: '#F0ACF1' },
      2: { name: 'Question', style: '#CFF1AC' },
    },
    status: {
      0: { name: 'Open', style: '#ACCCF1' },
      1: { name: 'In progress', style: '#F1E2AC' },
      2: { name: 'Fixed', style: '#ACF1AF' },
      3: { name: 'Won\'t fix', style: '#CFF1AC' },
    },
  },
  attributesName: {
    0: 'Priority',
    1: 'Type',
    2: 'Status',
    3: 'Assignee'
  }
}
