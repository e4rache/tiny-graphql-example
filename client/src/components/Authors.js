import React, { Component } from 'react';

class Authors extends Component {
    state = {}


    renderBooks = (books) =>
        books.map(book =>
            <span style={{ margin: '10px', color: 'blue' }}>
                [{book.title}]
            </span>)

    renderAuthorsLi = () =>
        this.props.authors.map(author =>
            <li key={author.id}>
                <div style={{ color: 'green' }}>
                    {author.name}
                </div>
                <div>
                    {this.renderBooks(author.books)}
                </div>
            </li>)

    render = () => {
        console.log('this.props.authors', this.props.authors)
        return (
            <div>
                <h4>Authors :</h4>
                <ul>
                    {this.renderAuthorsLi()}
                </ul>
            </div>
        );
    }
}

export default Authors;