import React from 'react'
import Book from './Book'
const Display = (b:Book) => {
  return (
    <div>Display
        {b.name}
        {b.author}
        {b.plubish}

    </div>
  )
}

export default Display