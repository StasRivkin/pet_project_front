import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'

import './services.css'

import serviceData from '../assets/data/serviceData';

const Services = () => {
    return (
        <section className="services">
            <Container>
                <Row>

                    {
                        serviceData.map((i, ind) => (
                            <Col lg='3' md='4' key={ind}>
                                <motion.div whileHover={{scale: 1.1}}
                                    className="service__item"
                                    style={{ background: `${i.bg}` }}
                                >
                                    <span>
                                        <i className={i.icon}></i>
                                    </span>
                                    <div>
                                        <h3>{i.title}</h3>
                                        <p>{i.subtitle}</p>
                                    </div>
                                </motion.div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>

    )
}

export default Services