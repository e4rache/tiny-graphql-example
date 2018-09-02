import React, { Component } from 'react';

class Books extends Component {
    state = {}


    renderBooksTr = () => (
        this.props.books.map((book) =>

            <tr>
                <td style={{ color: 'blue' }}>
                    {book.title}
                </td>

                <td>
                    {book.genre}
                </td>
                <td style={{ color: 'green' }}>
                    {book.author.name}
                </td>
            </tr>

        )
    )

    render() {
        return (
            <div>
                <h4>Books:</h4>
                <table style={{ width: '60%' }}>
                    <tr >
                        <th scope='col'>Title</th>
                        <th scope='col'>Genre</th>
                        <th scope='col'>Author</th>
                    </tr>
                    {this.renderBooksTr()}
                </table>
            </div>
        );
    }
}

export default Books;