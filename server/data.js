const authors = [
    {
        id: 1,
        name: 'Suzanne Collins'
    },
    {
        id: 2,
        name: 'Christina Dalcher'
    },
    {
        id: 3,
        name: 'Jane Austen'
    }
]

const books = [
    {
        id: 1,
        title: 'The Hunger Games',
        genre: 'Science Fiction',
        authorId: 1,
    },
    {
        id: 2,
        title: 'Catching Fire',
        genre: 'Science Fiction',
        authorId: 1,
    },
    {
        id: 3,
        title: 'Vox',
        genre: 'Science Fiction',
        authorId: 2,
    },
    {
        id: 4,
        title: 'Ellipsis Zine One: A flash fiction anthology',
        genre: 'Short Stories',
        authorId: 2
    },
    {
        id: 5,
        title: 'Pride and Prejudice',
        genre: 'Historical',
        authorId: 3
    },
    {
        id: 6,
        title: 'Sense and Sensibility',
        genre: 'Classics',
        authorId: 3
    }
]

module.exports = { authors, books }