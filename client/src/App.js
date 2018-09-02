import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

import Authors from './components/Authors'
import Books from './components/Books'

class App extends Component {

  state = {}

  constructor(props) {
    super(props)
    this.graphQLClient = new ApolloClient({
      uri: "http://localhost:4001/graphql"
    });
  }

  componentDidMount() {
    this.graphQLClient.query({
      query: gql`
        { 
          books {
            id
            title 
            genre 
            author { 
              name 
            }
          } 
        }
      `
    })
      .then(result => this.setState({ books: result.data.books }))

    this.graphQLClient.query({
      query: gql`
        {
          authors {
            id
            name
            books { 
              id
              title
            }
          }
        }
      `
    }).then((res) => {
      console.log('query authors res:', res.data.authors)
      this.setState({ authors: res.data.authors })
    })
  }

  render() {
    return (
      <div>
        <h1>Tiny GraphQL Demo</h1>
        <p>
          A GraphQL example I wish I had when I started learning GraphQL.
        </p>
        <p>
          Once you understand this example, head over <a href="https://www.apollographql.com/docs/graphql-tools/generate-schema.html" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://blog.apollographql.com/modularizing-your-graphql-schema-code-d7f71d5ed5f2" target="_blank" rel="noopener noreferrer">here</a> for further readings.
        </p>
        {this.state.authors ?
          <Authors authors={this.state.authors} /> : 'loading'}
        {this.state.books ?
          <Books books={this.state.books} /> : 'loading'}
      </div>
    );
  }
}

export default App;
