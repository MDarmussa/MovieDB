import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'
import PaginationComponent from './Pagination'

function MoviesList({ movies, getPage, pageCount }) {
     //step 4 - maping over the prop (movies) and save the data in movi to export it as a prop to CardMovie.js
  return (
    <Row className='mt-5'>
      {movies.length >= 1 ? (movies.map((movi) =>{
            return (
                <CardMovie key={movi.id} movi={movi} />
            )
      })) : <h2 className='text-center p-5'>No Movies Found...</h2>}
      {movies.length >= 1 ? (<PaginationComponent getPage={getPage} pageCount={pageCount} />) : null}
    </Row>
  )
}

export default MoviesList