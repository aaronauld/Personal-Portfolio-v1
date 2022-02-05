export default {
  nav: {
    logo: 'CC',
    links: [
      { text: 'Work', to: 'mywork' },
      { text: 'Contact', to: 'mycontact' },
    ],
  },
  header: {
    img:
      'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80',
    text: ['Hi!', "It's me Aaron.", 'I am a'],
    typical: [
      'Web Developer. 🖥',
      2000,
      'Computer Science Student.',
      2000,
      'Software Engineer.',
      2000,
    ],
    btnText: ['Discover Work', 'Discover Stacks']
  },

  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/assets/mongo.png',
        alt: 'mongodb',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/express.png',
        alt: 'express',
      },
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/postgres.png',
        alt: 'postgres',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/tailwind.png',
        alt: 'tailwind',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/python.png',
        alt: 'python',
      },
    ],
    desc: `The above stacks have been used throughout my numerous projects as outlined on Github. The stacks I use in order are MongoDb, Express, React, NodeJS, Tailwind, PostgeSQL and Python.`,
  },
};
