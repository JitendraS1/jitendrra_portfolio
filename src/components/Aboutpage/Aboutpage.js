import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>I'm a Front End Developer with 3+ Years Experience of Building Web-pages, web-products. Worked on various front
                            end technologies. Smart working result oriented and professional with good communication skills looking to work in
                            an organization <br /> to bring best out of myself and prove myself asset to an organization.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>React Js</li>
                                    <li>Next Js</li>
                                </Col>
                                <Col md={5}>
                                    <li>Redux</li>
                                    <li>Git/Github</li>
                                    <li>Bootsrap</li>
                                    <li>Material UI</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage