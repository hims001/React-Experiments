import PropTypes from 'prop-types'
import React from 'react'
import { Bookmark } from './Bookmark'

export const Book = ({title, author, pages, freebookmark}) => {
    return(
        <section>
            <p>Title : {title}</p>
            <p>Author : {author}</p>
            <p>No. of Pages : {pages}</p>
            { freebookmark ? <Bookmark /> : '' }
            <hr />
        </section>
    )
}

Book.propTypes = {
    title: PropTypes.string,
    author: PropTypes.string,
    pages: PropTypes.number,
    freebookmark: PropTypes.bool
}