import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'


function NavBar({search}) {

     const onSearch = (word) => {
          search(word)
     }
//step 7 - import the prop (search) from App.js and inject it in our HTML elements to be able to search for the movies
  return (
    <div className='nav-style w-100'>
          <Container>
               <Row className='pt-2'>
                    <Col xs="2" lg="1">
                         <a href='/'>
                              <img className='logo' src={logo} alt='anything' />
                         </a>
                    </Col>
                    <Col sx="10" lg="11" className='d-flex align-items-center'>
                         <div className='search w-100'>
                              <i className='fa fa-search'></i>
                              <input onChange={(e) => onSearch(e.target.value)} type="text" className='form-control' placeholder='Search' />
                         </div>
                    </Col>
               </Row>
          </Container>
    </div>
  )
}

export default NavBar