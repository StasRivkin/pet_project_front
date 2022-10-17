import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg='4'>
            <div className="logo">
              <div>
                <h1 className='text-white'>MyMarket</h1>
              </div> 
            </div>
            <p className="footer__text mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, dolores fugiat! Accusantium, eius aliquid! Eveniet laboriosam quas accusantium aut quod.
            </p>
          </Col>

          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick-links__title text-white">Top categories</h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Mobile Phones</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Modern Sofa</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Arm Chair</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Smart Watches</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='2'>
            <div className="footer__quick-links">
              <h4 className="quick-links__title text-white">Useful links</h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>Shop</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>Cart</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Privacy Policy</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='3'>
            <div className="footer__quick-links">
              <h4 className="quick-links__title text-white">Contacts</h4>
              <ListGroup className='footer__contact'>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span className='d-flex align-items-center gap-2'>
                    <i className="ri-map-2-line"></i>
                    <p>12345 Israel, Bla-Bla, Bla-bla-bla</p>
                  </span>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span className='d-flex align-items-center gap-2'>
                    <i className="ri-phone-line"></i>
                    <p>+972 444 444 44 44</p>
                  </span>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span className='d-flex align-items-center gap-2'>
                    <i className="ri-mail-line"></i>
                    <p>bla-bla@bla.com</p>
                  </span>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='12' className='text-white text-center mt-4'>
          Copyright {year}
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer