import React from 'react'
import { Row } from 'react-bootstrap'
import CardMovie from './CardMovie'

function MoviesList() {
  return (
    <Row>
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
    </Row>
  )
}

export default MoviesList