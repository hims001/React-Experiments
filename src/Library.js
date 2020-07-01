import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Book } from './Book'

class Library extends Component{
//    constructor(props){
//        super(props)
//        this.state= {
//            open: true
//        }
//        this.ToggleOpenClosed = this.ToggleOpenClosed.bind(this)
//    }

    //Default props
    static defaultProps = {
        books: [
            {title:'Default title', author: 'Default Author', pages: 10}
        ]
    }

    //Component life cycle methods
    componentDidMount(){
        console.log('Component is mounted!')
    }

    componentDidUpdate(){
        console.log('Component is just updated!')
    }

    state = {
        open: false,
        free_bookmark: true
     }

    ToggleOpenClosed = () => {
        this.setState( prevState => ({
            open: !prevState.open
        }))
    }

    render() {
    const {books} = this.props
        return(
            <div>
                <h1>The library is {this.state.open ? 'Open': 'Closed'}</h1>
                <button onClick={this.ToggleOpenClosed}>{!this.state.open ? 'Open': 'Close'} Library</button>
                {books.map(
                    (book,i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} freebookmark={this.state.free_bookmark}/>                )}
            </div>
        )}
}

//Use prop types to strongly bind types
Library.propTypes = {
    books: PropTypes.array
}

export default Library