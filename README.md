# tiny-graphql-example
a tiny example I wish I had when I started to learn ```graphql```.

``` 
const typeDefs = `
    type Query {
        books : [Book]!
        authors : [Author]!
    }
    type Mutation {
        updateBookGenre(id: ID!, genre: String!): Book!
    }
    type Book {
        id: ID!
        title: String!
        genre: String
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        books: [Book]!
    }
`

const resolvers = {
    Query: {
        books: (parent, args) => data.books,
        authors: (parent, args) => data.authors
    },
    Mutation: {
        updateBookGenre: (parent, { id, genre }) => {
            console.log('id', id)
            console.log('genre', genre)
            const book = data.books.find(book => book.id == id)
            console.log('book', book)
            book.genre = genre
            return book
        }
    },
    Book: {
        author: (book, args) =>
            data.authors.find(author => author.id == book.authorId)
    },
    Author: {
        books: (author, args) =>
            data.books.filter(book => book.authorId == author.id)
    }
}
```
