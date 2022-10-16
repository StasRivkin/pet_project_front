import React, { useState, useEffect } from 'react'
import Helmet from '../components/Helmet/Helmet';
import Services from '../services/Services';
import Clock from '../components/UI/Clock';
import '../styles/home.css'


import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';
import counterImg from '../assets/images/counter-timer-img.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import ProductsList from '../components/UI/ProductsList';
import products from '../assets/data/products'

const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTerndingProducts = products.filter(i => i.category === 'chair');
    const filteredSalesProducts = products.filter(i => i.category === 'sofa');
    setTrendingProducts(filteredTerndingProducts);
    setBestSalesProducts(filteredSalesProducts);
  }, [])

  return (
    <Helmet title={'Home'}>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">
                  Trending product in {year}
                </p>
                <h2>Make Your Interier More Minimalistic & Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quisquam est corporis! Id cumque ea optio. Distinctio praesentium facilis aliquam!</p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__button">
                  <Link to='/shop'>SHOP NOW!</Link>
                </motion.button>
              </div>
            </Col>

            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="Hero_image" />
              </div>
            </Col>


          </Row>
        </Container>
      </section>

      <Services />

      <section className="trending__products">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className="best__sales">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer__count">
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />

              <motion.button whileTap={{scale: 1.2}} className='buy__button store__btn'><Link to='/shop'>Visit Store</Link> </motion.button>
            </Col>

            <Col lg='6' md='6' className='text-end'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>



    </Helmet>
  )
}

export default Home