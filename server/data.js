const authors = [
    {
        id: 1,
        name: 'George Smith'
    },
    {
        id: 2,
        name: 'Anthony Parker'
    },
    {
        id: 3,
        name: 'Andrew Mathews'
    }
]

const books = [
    {
        id: 1,
        title: 'The Complete Node.js Developer Course',
        genre: 'node.js',
        authorId: 1,
    },
    {
        id: 2,
        title: 'Node.js, Express & MongoDB Dev to Deployment',
        genre: 'node.js',
        authorId: 2,
    },
    {
        id: 3,
        title: 'JavaScript: Understanding The Weird Parts',
        genre: 'javascript',
        authorId: 1,
    },
    {
        id: 4,
        title: 'What is Java Spring boot all about ?',
        genre: 'java',
        authorId: 3
    },
    {
        id: 5,
        title: 'A JavaScript / GraphQL story',
        genre: 'graphql',
        authorId: 2
    },
    {
        id: 6,
        title: 'front-end development with React tutorial',
        genre: 'react',
        authorId: 1
    }
]

module.exports = { authors, books }