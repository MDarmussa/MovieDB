import React from 'react'
import { Col } from 'react-bootstrap'

function CardMovie() {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className='my-1'>
          <div className='card'>
               <img src='md2.jpeg' className='card__image' alt='anything' />
               <div className='card__overlay'>
                    <div className='overlay__text text-center w-100 p-2'>
                         <p>Movie Name: Cast Away</p>
                         <p>Issued: 12-04-2014</p>
                         <p>Genre: Animation</p>
                         <p>Review: 4.7</p>
                    </div>
               </div>
          </div>
    </Col>
  )
}

export default CardMovie