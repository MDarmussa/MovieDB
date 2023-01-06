import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function NavBar() {
     // 1bc1b530a88739d11b24475d16e9b00d

  return (
    <div className='nav-style w-100'>
          <Container>
               <Row className='pt-2'>
                    <Col xs="2" lg="1">
                         <img className='logo' src='logo.png' alt='anything' />
                    </Col>
                    <Col sx="10" lg="11" className='d-flex align-items-center'>
                         <div className='search w-100'>
                              <i className='fa fa-search'></i>
                              <input type="text" className='form-control' placeholder='Search' />
                         </div>
                    </Col>
               </Row>
          </Container>
    </div>
  )
}

export default NavBar