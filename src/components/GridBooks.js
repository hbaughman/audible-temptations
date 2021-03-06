import React from 'react'
import GridList from 'material-ui/lib/grid-list/grid-list';
import GridTile from 'material-ui/lib/grid-list/grid-tile';
import IconButton from 'material-ui/lib/icon-button';

const GridBooks = ({
  books,
  onClick,
}) => {

  return (
    <GridList >
    {books.map(book => (
      <GridTile
        key={book.asin}
        title={book.title}
        onClick={() => onClick(book)}
      >
        <img src={book.product_images["500"]}/>
      </GridTile>
    ))}
    </GridList>
  )
}

export default GridBooks;
