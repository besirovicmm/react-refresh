import React from 'react'
import { Book } from './Book'

const BookList = () => {
  return (
    <section className="booklist">
      <Book>
        <Book.Image />
        <Book.Author />
        <Book.Title />
      </Book>
    </section>
  )
}

export default BookList
