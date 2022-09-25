import React from 'react'

export const Book = (props) => {
  return (
    <article className="book">
      {React.Children.map(props.children, (child) =>
        React.cloneElement(child, {})
      )}
    </article>
  )
}
const Image = () => {
  return (
    <img src="https://m.media-amazon.com/images/P/0735219109.01._SCLZZZZZZZ_SX500_.jpg"></img>
  )
}
const Title = () => {
  return <h1>Title</h1>
}
const Author = () => {
  return <h4>Author</h4>
}

Book.Image = Image
Book.Title = Title
Book.Author = Author
